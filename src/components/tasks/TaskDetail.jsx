import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTaskContext } from "../../hooks/useTasksContext";
import Modal from "../Modal/Modal";
import {EditTask} from './EditTask'

function TaskDetail({ task }) {
  const [showModal, setShowModal] = useState(false);
  const { deleteTask } = useTaskContext();
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleToggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const description = showFullDescription
    ? task.description
    : task.description.slice(0, 100);

  return (
    <Fragment>
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
            onClick={() => setShowModal(true)}
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
      <Modal isVisible={showModal} onClose={() => setShowModal(false)} >
        <EditTask taskId={task.id} onClose={() => setShowModal(false)}/>
      </Modal>
    </Fragment>
  );
}

export default TaskDetail;
