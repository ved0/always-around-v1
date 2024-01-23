const movieSelector = document.querySelector("#movies");
const yesButton = document.querySelector("#yes-button");

yesButton.addEventListener("click", () => {
  if (popupHeader.textContent.includes("delete")) {
    deleteMovie();
  }
});

function deleteMovie() {
  fetch("/api/delete?movie=" + movieSelector.value, {
    method: "DELETE",
  })
    .then((response) => {
      if (response.ok) {
        window.location.reload();
      }
    })
    .catch((error) => console.error("Error trying to log out:", error));
}
