import axios from "axios";

async function uploadFileToGoogleDrive(file, folder = "images") {
  if (!file) {
    throw new Error("No file selected");
  }

  const formData = new FormData();
  formData.append("file", file);
  formData.append("folder", folder);



  try {
    const response = await axios.post("http://localhost:5001/uploadData", formData);

    if (!response.data.fileId) {
      throw new Error("Failed to upload file");
    }

    return "https://drive.google.com/thumbnail?id=" + response.data.fileId + "&sz=w1000";

  } catch (error) {
    console.error("Error uploading file:", error);
    throw error;
  }
}

export default uploadFileToGoogleDrive;
