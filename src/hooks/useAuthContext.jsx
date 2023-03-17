import { useLocalStorage } from "./UseLocalStorage";
import { useContext, createContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { login as loginAPI } from "../components/user/api/login";

export const AuthContext = createContext();

const INITIAL_USER = {
  username: null,
  token: null,
};

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", INITIAL_USER);
  const navigate = useNavigate();

  const login = async (username, password) => {
    const [username1, token, error] = await loginAPI(username, password);

    if (token) {
      setUser({ username: username1, token: token });
      navigate("/tasks",  { replace: true });
    }

    return error;
  };

  const logout = () => {
    setUser({ username: null, token: null });
    navigate("/");
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}
