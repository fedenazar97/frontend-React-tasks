export const editTask = async (token, taskID, title, description) => {
  return fetch(`http://127.0.0.1:8000/todo/tasks/${taskID}/`, {
    method: "PUT",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    },
    body: JSON.stringify({
      title: title,
      description: description,
    }),
  });
};
