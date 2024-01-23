const uploadInput = document.querySelector("#upload-input");

async function upload() {
  let selectedFile;
  if (uploadInput.files.length > 0) {
    selectedFile = uploadInput.files[0];
  }

  const formData = new FormData();
  formData.append("video", selectedFile);

  await fetch("/api/upload", {
    method: "POST",
    body: formData,
  })  
    .then((response) => {
      if (response.ok) {
        window.location.reload();
      }
    })
    .catch((error) => console.log("Error uploading file:", error));
}
