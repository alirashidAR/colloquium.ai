import work from '../images/signup2.jpg';
import React,{useState} from "react";
import axios from 'axios'
import { useNavigate ,} from "react-router-dom";

const LoginForm = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 

    const logInUser = () => {
        if(email.length === 0){
          alert("Email has left Blank!");
        }
        else if(password.length === 0){
          alert("password has left Blank!");
        }
        else{
            axios.post('http://127.0.0.1:5000/login', {
                email: email,
                password: password
            })
            .then(function (response) {
                console.log(response);
                //console.log(response.data);
                navigate("/about");
            })
            .catch(function (error) {
                console.log(error, 'error');
                if (error.response.status === 401) {
                    alert("Invalid credentials");
                }
            });
        }
    }

  
  return (
    <div className="flex flex-col items-start p-8 shadow-lg rounded-lg h-screen w-screen">
      <h2 className="text-lg font-extrabold mb-4">COLLOQUIUM.ai</h2>
      <div className="flex w-full">
        <div className="w-7/12 p-6 ml-40 mt-9 login shadow-xl rounded-lg"> {/* Changed shadow-lg to shadow-xl */}
          <h2 className="text-2xl font-bold mb-4">WELCOME!</h2>
          <form>
            <div className="mb-4 mt-20">
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="username" name="username" placeholder="Email" className="mt-1 p-2 border w-full shadow-lg" />
            </div>
            <div className="mb-4">
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" name="password" placeholder="Password" className="mt-1 p-2 border w-full shadow-lg" />
            </div>
            <button type="submit" className="w-full bg text-white py-2 rounded hover:bg-slate-900 mt-4" onClick={logInUser}>LOGIN</button>
            <div className="flex justify-center mt-6 mb-2">
              <p>Don't have an account?</p>
            </div>
            <div className="mt-2">
              <button className="bg text-white py-2 px-4 rounded hover:bg-slate-900 w-full">SIGN UP</button>
            </div>
          </form>
          <div className="mt-4" />
        </div>
        <div className="w-1/2 ml-32">
          <img  src={work} alt="Image" className="w-1/2 work shadow-2xl" /> {/* Added shadow-2xl */}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
