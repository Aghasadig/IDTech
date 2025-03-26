const form = document.querySelector("#login-form");

const emailregex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  const email = formData.get("email");
  const password = formData.get("password");

  if (!emailregex.test(email)) {
    alert("wrong email format");

    return;
  }

  if (!password || password.length < 8 || password.length > 36) {
    alert("Password must be at least 8 characters long.");

    return;
  }

  const loginStr = localStorage.getItem("login");

  if (!loginStr) {
    alert("You must register first");

    return;
  }

  const login = JSON.parse(loginStr);

  if (login.email !== email || login.password !== password) {
    alert("wrong password");

    return;
  }

  location.href = "/home.html";
});
