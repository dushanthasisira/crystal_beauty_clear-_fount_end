export default function LoginPage(){
   
        return(
           <div className="w-full h-screen bg-[url(/login-bg.jpg)] bg-cover bg-center flex flex-row" >
                <div className="w-[50%] h-full"></div>
                <div className="w-[50%] h-full flex justify-center items-center">
                    <div className="w-[450px] h-[600px] backdrop-blur-xl shadow-xl rounded-xl flex flex-col justify-center items-center  ">
                        <input className="w-[400px] h-[50px] border border-white text-center m-1 rounded-xl "  type="email" placeholder="Email" />
                        <input className="w-[400px] h-[50px] border border-white text-center m-1 rounded-xl "  type="Password" placeholder="Password" />
                        <button className="w-[400px] h-[50px] bg-green-600 text-white border rounded-xl border-white text-center m-1 cursor-pointer">Login</button>
                    </div>
                </div>
           </div>
        )
    
}