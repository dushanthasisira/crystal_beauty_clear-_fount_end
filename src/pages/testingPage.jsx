import { useState } from "react";

export default function Testing() {
  const [number, setNumber] = useState(0);
  const [status, setstatus] =  useState('Pending');



  function increment() {
    let newNumber = number + 1;
    setNumber(newNumber);
  }

  function decrement() {
    let newNumber = number - 1;
    setNumber(newNumber);
  }

  return (
    <div className="w-full h-screen flex justify-center items-center p-4 transition-all duration-500">
      <div className="bg-black/10 backdrop-blur-sm rounded-2xl shadow-2xl p-8 w-full max-w-md text-center space-y-6 transform transition-all hover:scale-105 duration-300">
        {/* Display Number */}
        <span className="text-6xl font-extrabold  drop-shadow-lg">
          {number}
        </span>

        {/* Buttons */}
        <div className="flex justify-center gap-6 mt-4">
          <button
            onClick={increment}
            className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-2xl w-16 h-16 rounded-xl shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1 active:translate-y-0 transition-all duration-200 focus:outline-none cursor-pointer"
          >
            +
          </button>
          
          <button
            onClick={decrement}
            className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-2xl w-16 h-16 rounded-xl shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1 active:translate-y-0 transition-all duration-200 focus:outline-none cursor-pointer"
          >
            -
          </button>
        </div>
      </div>
      <div className="bg-black/10 backdrop-blur-sm rounded-2xl shadow-2xl p-8 w-full max-w-md text-center space-y-6 transform transition-all hover:scale-105 duration-300">
        {/* Display Number */}
        <span className="text-6xl font-extrabold drop-shadow-lg">
          {status}
        </span>

        {/* Buttons */}
        <div className="flex justify-center gap-6 mt-4">
          <button
            onClick={ ()=> {setstatus("Passed")}}
            className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-2xl w-16 h-16 rounded-xl shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1 active:translate-y-0 transition-all duration-200 focus:outline-none cursor-pointer"
          >
            Pass
          </button>
          
          <button
            onClick={ ()=> {setstatus("Faild")}}
            className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-2xl w-16 h-16 rounded-xl shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1 active:translate-y-0 transition-all duration-200 focus:outline-none cursor-pointer"
          >
            Fail
          </button>
        </div>
      </div>
    </div>
  );
}