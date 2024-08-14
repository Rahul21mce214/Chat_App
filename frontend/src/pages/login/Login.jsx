import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="h-full w-full bg-green-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border border-gray-100">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          {" "}
          Login Page
          <span className="text-3xl text-purple-800 "> ChatApp </span>
        </h1>

        <form>
            <div className="px-4 py-2">
                <label className="label p-1 ">
                    <span className="text-bold label-text text-white text-md">Username</span>
                </label>
                <input type="text" placeholder="Enter Username " className="input input-bordered w-full max-w-xs bg-slate-600 text-white" />
            </div>

            <div className="px-4 py-2">
                <label className="label p-1">
                    <span className="label-text text-white text-md">Password</span>
                </label>
                <input type="text" placeholder="Enter Password" className="input input-bordered w-full max-w-xs bg-slate-600 text-white" />
            </div>

            <div>
                <a href="#" className="py-2 px-4 text-orange-600 text-md"> Don't have an account?</a>
            </div>

            <button className="btn btn-primary w-full bg-slate-500 text-white py-1 px-4">Login</button>
        </form>
      </div>z
    </div>
  );
};

export default Login;
