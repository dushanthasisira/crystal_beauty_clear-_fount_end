import { useState } from "react"
import axios from "axios";

export default function LoginPage(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")         
       function handleLogin() {
    if (!email || !password) {
        alert("Please enter both email and password.");
        return;
    }

    console.log("Email:", email);
    console.log("Password:", password);

    axios.post("http://localhost:5000/api/user/login", {
        email: email,
        password: password
    }).then((response) => {
        console.log("Login Successful", response.data);
    }).catch((error) => {
        if (error.response) {
            console.log("Login failed", error.response.data);
        } else {
            console.log("Login failed. No response from server.", error.message);
        }
    });

    console.log("Login button clicked");
}
        return(
           <div className="w-full h-screen bg-[url(/login-bg.jpg)] bg-cover bg-center flex flex-row" >
                <div className="w-[50%] h-full"></div>
                <div className="w-[50%] h-full flex justify-center items-center">
                    <div className="w-[450px] h-[600px] backdrop-blur-xl shadow-xl rounded-xl flex flex-col justify-center items-center  ">
                        <input onChange={(e)=>{setEmail(e.target.value)}} className="w-[400px] h-[50px] border border-white text-center m-1 rounded-xl "  type="email" placeholder="Email"  />
                        <input  onChange={(e)=>{setPassword(e.target.value)}} className="w-[400px] h-[50px] border border-white text-center m-1 rounded-xl "  type="password" placeholder="Password"  />
                        <button onClick={handleLogin} className="w-[400px] h-[50px] bg-green-600 text-white border rounded-xl border-white text-center m-1 cursor-pointer">Login</button>
                   
                    </div>
                </div>
           </div>
        )
    
}