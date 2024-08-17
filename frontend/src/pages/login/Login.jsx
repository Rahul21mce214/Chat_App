import React  from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { login, loading } = useLogin();


  const handleSubmit = async(e) => {
    e.preventDefault();
    await login(username, password);
  }

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="h-full w-full bg-green-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border border-gray-100">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          {" "}
          Login Page
          <span className="text-3xl text-purple-800 "> ChatApp </span>
        </h1>

        <form onSubmit={handleSubmit}>
            <div className="px-4 py-2">
                <label className="label p-1 ">
                    <span className="text-bold label-text text-white text-md">Username</span>
                </label>
                <input type="text" placeholder="Enter Username " className="input input-bordered w-full max-w-xs bg-slate-600 text-white" 
                 value={username}
                 onChange={(e) => setUsername(e.target.value)}
                 />
                
            </div>

            <div className="px-4 py-2">
                <label className="label p-1">
                    <span className="label-text text-white text-md">Password</span>
                </label>
                <input type="password" placeholder="Enter Password" className="input input-bordered w-full max-w-xs bg-slate-600 text-white" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <div>
                <Link to="/signup" className="py-2 px-4 text-orange-600 text-md"> Don't have an account?</Link>
            </div>

            <button className="btn btn-primary w-full bg-slate-500 text-white py-1 px-4"
            disabled={loading}>
            {loading ? <span className="loading loading-spinner"></span> : "Login"}
            </button>
        </form>
      </div>z
    </div>
  );
};

export default Login;
