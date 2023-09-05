import work from '../images/signup2.jpg';
import React,{useState} from "react";
import axios from 'axios'
import { useNavigate ,} from "react-router-dom";

const SignForm = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();
     
    const registerUser = () => {
        axios.post('http://127.0.0.1:5000/signup', {
            email: email,
            password: password
        })
        .then(function (response) {
             console.log(response);
            navigate("/");
        })
        .catch(function (error) {
            console.log(error, 'error');
            if (error.response.status === 401) {
                alert("Invalid credentials");
            }
        });


    };
  return (
    <div className="flex flex-col items-start p-8 shadow-lg rounded-lg h-screen w-screen">
      <h2 className="text-3xl font-bold mb-4">COLLOQUIUM.ai</h2>
      <div className="flex w-full">
        <div className="w-7/12 p-6 ml-40 mt-9 login shadow-xl rounded-lg"> {/* Changed shadow-lg to shadow-xl */}
          <h2 className="text-2xl font-bold mb-4">WELCOME!</h2>
          <form>
            <div className="mb-4 mt-20">
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="username" name="username" placeholder="Email" className="mt-1 p-2 border w-full shadow-lg" />
            </div>
            <div className="mb-4">
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" name="password" placeholder="New Password" className="mt-1 p-2 border w-full shadow-lg" />
            </div>
            <div className="mb-4">
              <input type="password" id="password" name="password" placeholder="Confirm New Password" className="mt-1 p-2 border w-full shadow-lg" />
            </div>
            <br></br>
            <br></br>
            <button type="submit" className="w-full bg text-white py-2 rounded hover:bg-slate-900 mt-4" onClick={() => registerUser()}>CREATE ACCOUNT</button>
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


export default SignForm;
