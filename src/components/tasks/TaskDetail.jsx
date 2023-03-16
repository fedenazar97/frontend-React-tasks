/*import { useNavigate } from "react-router-dom";
import { useTaskContext } from "../../context/TasksContext";

function TaskDetail({ task }) {
  const { deleteTask } = useTaskContext();
  const navigate = useNavigate();
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold first-letter:capitalize break-words">
        {task.title}
      </h1>
      <p className="text-gray-500 text-sm break-words">{task.description}</p>
      <div className="flex flex-col sm:flex-row justify-center sm:justify-between">
        <button
          className="bg-indigo-500 px-2 py-1 rounded-md mt-4 hover:bg-indigo-400"
          onClick={() => navigate(`/tasks/${task.id}`)}
        >
          Edit
        </button>
        <button
          className="bg-red-500 px-2 py-1 rounded-md mt-4 ml-2 hover:bg-red-400"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskDetail;
*/

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTaskContext } from "../../context/TasksContext";

function TaskDetail({ task }) {
  const { deleteTask } = useTaskContext();
  const navigate = useNavigate();
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleToggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const description = showFullDescription
    ? task.description
    : task.description.slice(0, 100);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold first-letter:capitalize break-words">
        {task.title}
      </h1>
      <p className="text-gray-500 text-sm break-words">
        {description}
        {task.description.length > 100 && (
          <button
            className="text-blue-500 font-bold ml-2 focus:outline-none hover:text-blue-700"
            onClick={handleToggleDescription}
          >
            {showFullDescription ? "Show less" : "Read more..."}
          </button>
        )}
      </p>
      <div className="flex flex-col sm:flex-row justify-center sm:justify-between">
        <button
          className="bg-indigo-500 px-2 py-1 rounded-md mt-4 hover:bg-indigo-400"
          onClick={() => navigate(`/tasks/${task.id}`)}
        >
          Edit
        </button>
        <button
          className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskDetail;
