import { useParams } from "react-router-dom";
import { useTaskContext } from "../../hooks/TasksContext";
import { EditTaskForm } from "./EditTaskForm";

export const EditTask = () => {
  let { taskId } = useParams();
  const { tasks } = useTaskContext();

  const task = tasks.filter((task) => task.id === parseInt(taskId));

  return (
    <div>
      {task.map((task) => (
        <EditTaskForm key={task.id} task={task} />
      ))}
    </div>
  );
};
