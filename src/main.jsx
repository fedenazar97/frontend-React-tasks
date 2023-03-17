import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { TasksContextProvider } from "./hooks/useTasksContext";
import { AuthContextProvider } from "./hooks/useAuthContext";

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <TasksContextProvider>
          <App />
        </TasksContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
