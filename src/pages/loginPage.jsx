import { useState } from "react"
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function LoginPage(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")    
    const [loading, setLoading] = useState(false)   
    const navigate  = useNavigate()  
     
       function handleLogin() {
        setLoading(true)
    if (!email || !password) {
        alert("Please enter both email and password.");
        return;
    }

   

    axios.post(import.meta.env.VITE_BACKEND_URL+"/api/user/login", {
        email: email,
        password: password
    }).then((response) => {
       
        toast.success("Login Successful");
        localStorage.setItem("token", response.data.token)
        const user = response.data.user;
        if(user.role == "admin"){
           navigate("/admin")
         
        }
        else{
             navigate("/")
            

        }
          setLoading(false)
    }).catch((error) => {
        if (error.response) {
           
            toast.error(error.response.data.message || "Login failed");
             setLoading(false)
            
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
                        <button onClick={handleLogin} className="w-[400px] h-[50px] bg-green-600 text-white border rounded-xl border-white text-center m-1 cursor-pointer">

                            {
                                loading?"Loading......":"Login"
                            }
                        </button>
                       <p className="mt-4 text-center text-white">
        Don't have an account yet?
        <span  onClick={() => navigate("/register")} className="ml-1  text-blue-300 hover:text-blue-500 font-medium underline cursor-pointer">
          Register Now
        </span>
      </p>
                   
                    </div>
                </div>
           </div>
        )
    
}