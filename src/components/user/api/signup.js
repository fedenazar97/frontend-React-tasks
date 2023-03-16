export const signup = async (username, email, password) => {
  let error, username1;
  const response = await fetch("http://127.0.0.1:8000/auth/signup/", {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      email: email,
      password: password,
    }),
  });
  //const res = await response.json();
  //console.log(res["username"]+res["email"]+res["password"]);

  switch (response.status) {
    case 201:
      const body = await response.json();
      username1 = body["username"];
      break;
    case 400:
      const bad_request = await response.json();
      if (bad_request["username"]) {
        error = bad_request["username"];
      } else if (bad_request["email"]) {
        error = bad_request["email"];
      } else if (bad_request["password"]) {
        error = bad_request["password"];
      }
      break;
    case 500:
      error = "Internal server error, try again later";
      break;
    default:
      error = `Unknow error, code (${response.status})`;
      break;
  }
  return [error, username1]
};
