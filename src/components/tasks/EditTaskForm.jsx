import { useState } from "react";
import { useTaskContext } from "../../hooks/useTasksContext";

export const EditTaskForm = ({ task, onClose }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const { editTask } = useTaskContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    editTask(task.id, title, description);
    onClose();
  };

  return (
    <div className=" max-h-screen">
      <form
        className="relative w-full max-w-2xl mx-auto bg-slate-800 shadow-md rounded-md px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <h1 className="font-bold text-center text-white text-2xl mb-5">
          Edit your task
        </h1>
        <div className="mb-4">
          <input
            className="bg-slate-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={title}
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <textarea
            className="bg-slate-300 h-48 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="absolute bottom-0 right-0 flex mb-4 mr-8">
          <button
            className="text-black mt-1 underline ml-1 mr-2"
            onClick={() => onClose()}
          >
            Cancel
          </button>
          <button
            className="bg-indigo-500 px-3 py-1  text-white rounded-md hover:bg-indigo-400"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};
