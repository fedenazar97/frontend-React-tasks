export const getTask = async (token, taskId) => {
  return fetch(`http://127.0.0.1:8000/todo/tasks/${taskId}`, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Token ${token}`,
    },
  });
};
