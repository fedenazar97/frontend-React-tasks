export const deleteTask = async (token, taskID) => {
    return fetch(`http://127.0.0.1:8000/todo/tasks/${taskID}`, {
      method: "DELETE",
      headers: {
        accept: "application/json",
        Authorization: `Token ${token}`,
      },
    });
  };