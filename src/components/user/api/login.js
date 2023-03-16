export const login = async (username, password) => {
  let username1, token, error;
  try {
    const response = await fetch("http://127.0.0.1:8000/auth/login/", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    switch (response.status) {
      case 200:
        const body = await response.json();
        username1 = body["username"];
        token = body["token"];
        break;
      case 400:
        error = "Incorrect username or password";
        break;
      case 500:
        error = "Internal server error, try again later";
        break;
      default:
        error = `Unknow error, code (${response.status})`;
        break;
    }
  } catch (err) {
    error = `Unknow error: ${err}`;
  }
  return [username1, token, error];
};
