import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { Link } from "react-router-dom";
import Loader from '../Loader/Loader'

export const Login = () => {
  const { login } = useAuthContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const loginError = await login(username, password);
    setErrorMsg(loginError);
    setLoading(false);
  };

  return (
    <div className="bg-zinc-900 flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-800 shadow-md rounded-md px-8 pt-6 pb-8 mb-4"
      >
        <h1 className="font-bold text-center text-white text-2xl mb-5">
          Log In
        </h1>
        <div className="mb-4">
          <input
            className="bg-slate-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            placeholder="username"
          />
        </div>
        <div className="mb-6">
          <input
            className="bg-slate-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            value={password}
            placeholder="********"
          />
        </div>
        <div className="text-red-500 text-center mt-4 pb-4">{errorMsg}</div>
        <div className="flex items-center justify-between">
          <button
            className="bg-indigo-500 px-3 py-1 w-full text-white rounded-md hover:bg-indigo-400"
            type="submit"
          >
            { loading ? <Loader size={10}/> : 'Login' }
          </button>
        </div>
        <div className="mt-6 mb-2 border-b border-zinc-900"></div>
        <div className="text-center text-white mt-4">
          Don't have an account?
          <Link to="/signup" className="text-blue-500 underline ml-1">
            Sign up here
          </Link>
        </div>
      </form>
    </div>
  );
};
