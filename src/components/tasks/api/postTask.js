export const postTask = async (title, description, token) => {
  return fetch("http://127.0.0.1:8000/todo/tasks/create/", {
    method: "POST",
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
