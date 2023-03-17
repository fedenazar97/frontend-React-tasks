import { useState } from "react";
import { useTaskContext } from "../../hooks/useTasksContext";
import Loader from "../Loader/Loader";


function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask, loadingPost } = useTaskContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    createTask(title, description);
    setTitle("");
    setDescription("");
  };

  const isSubmitDisabled = !title.trim();

  return (
    <div className="mx-auto max-w-md">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-800 p-10 mb-4 rounded-md"
      >
        <input
          className="bg-slate-300 p-2 w-full mb-2 rounded-md"
          placeholder="Write your task"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
          maxLength={200}
        />
        <textarea
          className="bg-slate-300 p-3 w-full mb-2 rounded-md"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <button
          className="bg-indigo-500 px-3 py-1 w-full text-white rounded-md hover:bg-indigo-400"
          disabled={isSubmitDisabled}
        >
          { loadingPost ? <Loader size={10}/> : 'Save' }
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
