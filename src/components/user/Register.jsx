import { useState } from "react";
import { signup } from "./api/signup";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";

export const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [succes, setSucces] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (password !== password2) {
      setSucces(false);
      setLoading(false);
      setError(true);
      return setErrorMsg("Passwords do not match");
    }
    const register_response = await signup(username, email, password);
    if (register_response[1]) {
      setSucces(true);
      setError(false);
    } else {
      setSucces(false);
      setError(true);
      setErrorMsg(register_response[0]);
    }
    setLoading(false);
  };

  return (
    <div className="bg-zinc-900 flex justify-center items-center h-screen">
      <form
        className="bg-slate-800 shadow-md rounded-md px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <h1 className="font-bold text-center text-white text-2xl mb-5">
          Create an account
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
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            value={email}
            placeholder="email"
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
        <div className="mb-6">
          <input
            className="bg-slate-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setPassword2(e.target.value)}
            type="password"
            value={password2}
            placeholder="Repeat your password"
          />
        </div>
        {error && (
          <div className="text-red-500 text-center mt-4 pb-4">✗ {errorMsg}</div>
        )}
        {succes && (
          <div className="text-center text-green-600 mt-4 pb-4">
            ✓ Account created successfully. You can
            <Link to="/login" className="text-blue-500 underline ml-1">
              Log in here
            </Link>
          </div>
        )}
        <button
          className="bg-indigo-500 px-3 py-1 w-full text-white rounded-md hover:bg-indigo-400"
          type="submit"
        >
          {loading ? <Loader size={10} /> : "SignUp"}
        </button>
        <div className="mt-6 mb-2 border-b border-zinc-900"></div>
        <div className="text-center text-white mt-4">
          Do you already have an account?
          <Link to="/login" className="text-blue-500 underline ml-1">
            Log in here
          </Link>
        </div>
      </form>
    </div>
  );
};

/*
const App = () => {
    const routes = useRoutes([
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <Root />
          </ProtectedRoute>
        ),
        children: [
          {
            path: "/",
            element: <MatchesPage />,
          },
          {
            path: "/robots",
            element: <RobotsList />,
          },
          {
            path: "/robots/:robotId",
            element: <RobotDetails />
          },
          {
            path: "/uploadbot",
            element: <UploadBot />,
          },
          {
            path: "/matches",
            element: <MatchesPage />,
          },
          {
            path: "/matches/create",
            element: <CreateMatch />,
          },
          {
            path: "/matches/history",
            element: <StartedMatchesPage />,
          },
          {
            path: "/matches/:matchId",
            element: <LobbyContainer />,
          },
          {
            path: "/profile",
            element: <Profile />,
          },
          {
            path: "/simulation",
            element: <SimulationManager />,
          },
        ],
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/recover",
        element: <RecoverPasswordPage />,
      },
    ])
*/
