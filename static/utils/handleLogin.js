const username = document.querySelector("#username");
const password = document.querySelector("#password");
const button = document.querySelector("#login-button");

username.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    password.focus();
  }
});

password.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    button.click();
  }
});

async function login() {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username.value,
      password: password.value,
    }),
    credentials: "include",
  };

  await fetch("/api/login", requestOptions)
    .then((response) => {
      if (response.ok) {
        window.location.href = "/admin";
      }
    })
    .catch((error) => console.error("Error trying to log in:", error));
}
