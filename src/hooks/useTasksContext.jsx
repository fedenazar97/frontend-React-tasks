import { useContext, createContext, useState, useEffect } from "react";
import { getTasksList } from "../components/tasks/api/getTaskList";
import { postTask } from "../components/tasks/api/postTask";
import { editTask as editTaskAPI } from "../components/tasks/api/editTask";
import { deleteTask as deleteTaskAPI } from "../components/tasks/api/deleteTask";
import { useAuthContext } from "./useAuthContext";

export const TaskContext = createContext();

export function TasksContextProvider(props) {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({});
  const { user } = useAuthContext();
  const [error, setError] = useState(null);
  const [loadingFetch, setLoadingFetch] = useState(false);
  const [loadingPost, setLoadingPost] = useState(false);

  const createTask = async (title, description) => {
    setLoadingPost(true);
    const response = await postTask(title, description, user.token);
    const body = await response.json();
    setTasks((prevTasks) => prevTasks.concat(body));
    setLoadingPost(false);
  };

  const deleteTask = async (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
    await deleteTaskAPI(user.token, taskId);
  };

  const editTask = async (taskId, title, description) => {
    const response = await editTaskAPI(user.token, taskId, title, description);
    const task_edited = response.json();
    setTask(task_edited);
  };

  const fetchTaskList = async () => {
    setLoadingFetch(true);
    const response = await getTasksList(user.token);
    const data = await response.json();
    setTasks(data);
    setLoadingFetch(false);
  };

  useEffect(() => {
    fetchTaskList();
  }, [task, user]);

  return (
    <TaskContext.Provider
      value={{
        error,
        loadingFetch,
        loadingPost,
        tasks,
        deleteTask,
        createTask,
        editTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}

export function useTaskContext() {
  return useContext(TaskContext);
}
