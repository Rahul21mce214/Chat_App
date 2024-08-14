import React from "react";

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="h-full w-full bg-green-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border border-gray-100">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SignUp Page
          <span className="text-3xl text-purple-800"> ChatApp </span>
        </h1>

        <form>
          <div className="px-4 py-2">
            <label className="label p-1">
              <span className="text-bold label-text text-white text-md">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="input input-bordered w-full max-w-xs bg-slate-600 text-white"
              name="fullName"
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
            />
          </div>

          <div className="px-4 py-2">
            <label className="label p-1">
              <span className="label-text text-white text-md">Gender</span>
            </label>
            <div className="flex items-center">
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                className="mr-2"
              />
              <label htmlFor="male" className="text-white text-md">Male</label>
            </div>
            <div className="flex items-center mt-2">
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                className="mr-2"
              />
              <label htmlFor="female" className="text-white text-md">Female</label>
            </div>
          </div>

          <div className="px-4 py-2">
            <a href="#" className="text-orange-600 text-md">Already have an account?</a>
          </div>

          <button className="btn btn-primary w-full bg-slate-500">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
