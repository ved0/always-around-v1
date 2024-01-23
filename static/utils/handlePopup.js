const popup = document.querySelector("#popup-container");
let popupHeader = document.querySelector("#popup-header");
let popupText = document.querySelector("#popup-text");
const noButton = document.querySelector("#no-button");

noButton.addEventListener("click", () => {
  popup.style.display = "none";
});

popup.addEventListener("click", () => {
  popup.style.display = "none";
});

function displayDeletePopup() {
  popupHeader.textContent =
    "Do you really want to delete this movie: " + movieSelector.value;
  popupText.textContent =
    "The following action will delete this movie and it will be gone forever. \r\nDo you want to continue?";
  popup.style.display = "flex";
}

function displayLogoutPopup() {
    popupHeader.textContent =
      "Logout? ";
    popupText.textContent =
      "Are you sure that you want to log out?";
    popup.style.display = "flex";
  }
