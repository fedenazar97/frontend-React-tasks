import { Routes, Route } from "react-router-dom";

import { TasksPage } from "./routes/TasksPage";
import { Login } from "./components/user/Login";
import { Register } from "./components/user/Register";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import { Home } from "./routes/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      <Route
        path="/tasks"
        element={
          <ProtectedRoute>
            <TasksPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default App;
