import React, { useState } from "react";
import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import  useSignup  from "../../hooks/useSignup";

import { Toaster, toast } from "react-hot-toast";




const Signup = () => {
  const [inputs , setInputs] = useState({
    fullName : "",
    username : "",
    password : "",
    confirmPassword : "",
    gender : "",
  });

  const {loading, signup} = useSignup();

  const handleCheckboxChange= (gender) => {
    setInputs({...inputs , gender});
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    await signup(inputs)
  }


  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
    <Toaster />
      <div className="h-full w-full bg-green-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border border-gray-100">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SignUp Page
          <span className="text-3xl text-purple-800"> ChatApp </span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="px-4 py-2">
            <label className="label p-1">
              <span className="text-bold label-text text-white text-md">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="input input-bordered w-full max-w-xs bg-slate-600 text-white"
              name="fullName"
              value={inputs.fullName}
              onChange={(e) => setInputs({...inputs , fullName : e.target.value})}
            />
          </div>

          <div className="px-4 py-2">
            <label className="label p-1">
              <span className="text-bold label-text text-white text-md">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="input input-bordered w-full max-w-xs bg-slate-600 text-white"
              name="username"
              value={inputs.username}
              onChange={(e) => setInputs({...inputs , username : e.target.value})}
            />
          </div>

          <div className="px-4 py-2">
            <label className="label p-1">
              <span className="label-text text-white text-md">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="input input-bordered w-full max-w-xs bg-slate-600 text-white"
              name="password"
              value={inputs.password}
              onChange={(e) => setInputs({...inputs , password : e.target.value})}
            />
          </div>

          <div className="px-4 py-2">
            <label className="label p-1">
              <span className="label-text text-white text-md">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Confirm Password"
              className="input input-bordered w-full max-w-xs bg-slate-600 text-white"
              name="confirmPassword"
              value={inputs.confirmPassword}
              onChange={(e) => setInputs({...inputs , confirmPassword : e.target.value})}
              
            />
          </div>

          <GenderCheckbox onCheckboxChange={handleCheckboxChange}  selectedGender={inputs.gender}/>

          <div className="px-4 py-2">
            <Link to="/login" className="text-orange-600 text-md">Already have an account?</Link>
          </div>

          <button className="btn btn-primary w-full bg-slate-500" disabled={loading}>
            {loading ? <span className="loading loading-spinner"></span> : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
