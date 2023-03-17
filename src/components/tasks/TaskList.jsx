import TaskDetail from "./TaskDetail";
import { useTaskContext } from "../../hooks/TasksContext";
import Loader from "../Loader/Loader";

export const TaskList = () => {
  const { tasks, loadingFetch, error } = useTaskContext();

  return (
    <div>
      {loadingFetch && <Loader size={40} />}

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-2">
        {Array.isArray(tasks) &&
          tasks.map((task) => <TaskDetail key={task.id} task={task} />)}
      </div>
      {!loadingFetch && error && <h3>{error}</h3>}
    </div>
  );
};

export default TaskList;
