export const getTasksList = async (token) => {
    return fetch("http://127.0.0.1:8000/todo/tasks/", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Token ${token}`,
      },
    });
  };