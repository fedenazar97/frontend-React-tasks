import { useTaskContext } from "../../hooks/useTasksContext";
import { EditTaskForm } from "./EditTaskForm";

export const EditTask = ({taskId, onClose}) => {
  const { tasks } = useTaskContext();

  const task = tasks.filter((task) => task.id === taskId);

  return (
    <div>
      {task.map((task) => (
        <EditTaskForm key={task.id} task={task} onClose={onClose} />
      ))}
    </div>
  );
};
