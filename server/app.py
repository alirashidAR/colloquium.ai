import cv2
from keras.models import model_from_json
import numpy as np
from flask import Flask, render_template, Response,request
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.exc import SQLAlchemyError
from flask_bcrypt import Bcrypt
from flask_jwt_extended import jwt_required, set_access_cookies, unset_jwt_cookies, create_access_token, JWTManager, get_jwt_identity
from datetime import timedelta
import json
app = Flask(__name__)

json_file = open("emotiondetector.json", "r")
model_json = json_file.read()
json_file.close()
model = model_from_json(model_json)
model.load_weights("emotiondetector.h5")

# Load cascade classifier
haar_file = cv2.data.haarcascades + 'haarcascade_frontalface_default.xml'
face_cascade = cv2.CascadeClassifier(haar_file)

def extract_features(image):
    feature = np.array(image)
    feature = feature.reshape(1, 48, 48, 1)
    return feature / 255.0

def generate_frames():
    webcam = cv2.VideoCapture(0)
    labels = {0 : 'angry', 1 : 'disgust', 2 : 'fear', 3 : 'happy', 4 : 'neutral', 5 : 'sad', 6 : 'surprise'}

    while True:
        ret, frame = webcam.read()
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        faces = face_cascade.detectMultiScale(frame, 1.3, 5)

        for (p, q, r, s) in faces:
            image = gray[q:q+s, p:p+r]
            cv2.rectangle(frame, (p, q), (p+r, q+s), (255, 0, 0), 2)
            image = cv2.resize(image, (48, 48))
            img = extract_features(image)
            pred = model.predict(img)
            prediction_label = labels[pred.argmax()]
            cv2.putText(frame, prediction_label, (p-10, q-10), cv2.FONT_HERSHEY_COMPLEX_SMALL, 2, (0, 0, 255))

        ret, buffer = cv2.imencode('.jpg', frame)
        frame = buffer.tobytes()
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/video_feed')
def video():
    return Response(generate_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')


@app.route('/process_transcript', methods=['POST','GET'])
def process_transcript():
    data=request.json
    transcript=data.get('transcript','')

    return {'result':'Processed Successfully'}




##Login and sign up
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///colloquium.sqlite"
app.config['JWT_SECRET_KEY'] = "colloquium.ai"
app.config['JWT_COOKIE_SECURE'] = False

db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)

class User(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    email = db.Column(db.String(50), nullable=False, unique=True)
    password = db.Column(db.String(100), nullable=False)
    

@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        data = request.form

        user = User.query.filter_by(email=data['email']).first()

        if not user:
            return Response(status=400, response=json.dumps({"message": "User does not exist"}))
        

        if not bcrypt.check_password_hash(user.password, data['password']):
            return Response(status=400, response=json.dumps({"message": "Invalid password"}))
        
        access_token = create_access_token(identity=user.email, expires_delta=timedelta(minutes=60))

        response = Response(status=200, response=json.dumps({"message": "Login successfull"}))
        set_access_cookies(response, access_token) 

        return response


@app.route("/signup", methods=["GET", "POST"])
def signup():
    if request.method == "POST":
        data = request.form
            
        if data["password"] != data["confirm_password"]:
                return Response(status=400, response=json.dumps({"message": "Passwords do not match"}))

        user = User(data['email'], bcrypt.generate_password_hash(data['password']).decode("utf-8"))
        try:
            db.session.begin()
            db.session.add(user)
            db.session.commit()
        except SQLAlchemyError:
            db.session.rollback()
            return Response(status=400, response=json.dumps({"message": "Email already exists"}))
            
        return Response(status=200, response=json.dumps({"message": "Successfully created user"}))
    
@app.route("/logout", methods=["POST"])
@jwt_required
def logout():
    response = Response(status=201, response=json.dumps({"message": "Logout Successfull"}))
    unset_jwt_cookies(response)
    return response

@jwt.expired_token_loader
def expired():
    return Response(status=401, response=json.dumps({"message": "Session expired"})) # redirect to login page




if __name__ == '__main__':
    app.run(debug=True)
