import { Routes, Route } from "react-router-dom";

import { TasksPage } from "./routes/TasksPage";
import { Login } from "./components/user/Login";
import { Register } from "./components/user/Register";
import { EditTask } from "./components/tasks/EditTask";
import { ProtectedRoute } from "./routes/ProtectedRoute";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/tasks"
        element={
          <ProtectedRoute>
            <TasksPage />
          </ProtectedRoute>
        }
      />
      <Route path="/signup" element={<Register />} />
      <Route path="/tasks/:taskId" element={<EditTask />} />
    </Routes>
  );
};

export default App;
