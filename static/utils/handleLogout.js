const logoutButton = document.querySelector("#logout-button");

const yesLogoutButton = document.querySelector("#yes-button");

yesLogoutButton.addEventListener("click", () => {
  if (popupHeader.textContent.includes("Logout")) {
    logout();
  }
});

logoutButton.addEventListener("click", () => {
  displayLogoutPopup();
});

function logout() {
  fetch("/api/logout")
    .then((response) => {
      if (response.ok) {
        window.location.href = "/login";
      }
    })
    .catch((error) => console.error("Error trying to log out:", error));
}
