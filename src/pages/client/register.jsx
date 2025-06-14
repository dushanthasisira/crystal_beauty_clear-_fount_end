import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState(""); // New state for confirm password
    const [phone, setPhone] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    function handleRegister() {
        setLoading(true);

        // Validate input fields
        if (!firstName || !lastName || !email || !password || !confirmPassword || !phone) {
            alert("Please fill in all fields.");
            setLoading(false);
            return;
        }

        // Validate password confirmation
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            setLoading(false);
            return;
        }

        // Send registration request to the backend
        axios.post(import.meta.env.VITE_BACKEND_URL + "/api/user", {
            firstName,
            lastName,
            email,
            password,
            phone,
        })
            .then((response) => {
                toast.success("Registration Successful");
                navigate("/login"); // Redirect to login page after successful registration
                setLoading(false);
            })
            .catch((error) => {
                if (error.response) {
                    toast.error(error.response.data.message || "Registration failed");
                }
                setLoading(false);
            });

        console.log("Register button clicked");
    }

    return (
        <div className="w-full h-screen bg-[url(../register-bg.jpg)] bg-cover bg-center flex flex-row">
            {/* Left Section */}
            <div className="w-[50%] h-full"></div>

            {/* Right Section */}
            <div className="w-[50%] h-full flex justify-center items-center">
                <div className="w-[450px] h-[600px] backdrop-blur-xl shadow-xl rounded-xl flex flex-col justify-center items-center">
                    {/* First Name Input */}
                    <input
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-[400px] h-[50px] border border-white text-center m-1 rounded-xl"
                        type="text"
                        placeholder="First Name"
                    />

                    {/* Last Name Input */}
                    <input
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-[400px] h-[50px] border border-white text-center m-1 rounded-xl"
                        type="text"
                        placeholder="Last Name"
                    />

                    {/* Email Input */}
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-[400px] h-[50px] border border-white text-center m-1 rounded-xl"
                        type="email"
                        placeholder="Email"
                    />

                    {/* Password Input */}
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-[400px] h-[50px] border border-white text-center m-1 rounded-xl"
                        type="password"
                        placeholder="Password"
                    />

                    {/* Confirm Password Input */}
                    <input
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-[400px] h-[50px] border border-white text-center m-1 rounded-xl"
                        type="password"
                        placeholder="Confirm Password"
                    />

                    {/* Phone Input */}
                    <input
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-[400px] h-[50px] border border-white text-center m-1 rounded-xl"
                        type="text"
                        placeholder="Phone Number"
                    />

                    {/* Register Button */}
                    <button
                        onClick={handleRegister}
                        className="w-[400px] h-[50px] bg-green-600 text-white border rounded-xl border-white text-center m-1 cursor-pointer"
                    >
                        {loading ? "Loading......" : "Register"}
                    </button>

                    {/* Login Link */}
                    <p className="mt-4 text-center text-white">
                        Already have an account?
                        <span
                            onClick={() => navigate("/login")}
                            className="ml-1 text-blue-300 hover:text-blue-500 font-medium underline cursor-pointer"
                        >
                            Login Now
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}