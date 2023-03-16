import { Navigate } from "react-router-dom"
import { useAuthContext } from "../context/useAuthContext"

export const ProtectedRoute = ({ children }) => {
  const { user } = useAuthContext()

  return user.token ? children : <Navigate to="/login" />
}
