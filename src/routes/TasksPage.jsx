import TaskList from "../components/tasks/TaskList";
import TaskForm from "../components/tasks/TaskForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import { useAuthContext } from "../context/useAuthContext";

export const TasksPage = () => {
  const { logout } = useAuthContext();

  const handleLogout = () => {
    logout();
  };

  return (
    <main className="bg-zinc-900 min-h-screen">
      <button
        onClick={handleLogout}
        className="absolute top-4 right-4 bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded"
      >
        <FontAwesomeIcon icon={faSignOutAlt} />
      </button>
      <div className="container mx-auto p-10">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
};
