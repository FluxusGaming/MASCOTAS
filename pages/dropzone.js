import React, { useState } from "react";
import FileUpload from "../components/FileUploader/file-upload";
import axios from "axios";
function Dropzone() {
  const [myFiles, setMyFiles] = useState({});

  const updateUploadedFiles = (files) =>
    // setNewUserInfo({ ...newUserInfo, profileImages: files });
    setMyFiles(files);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(myFiles);
    myFiles.map((dataFileName) => {
      const data = new FormData();
      data.append("image", dataFileName);
      // data.append("image", files);
      const config = {
        headers: { "content-type": "multipart/form-data" },
      };
      axios
        .post("http://localhost:4000/upload", data, config)
        .then((response) => {
          console.log(response);
        });
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FileUpload
          accept=".jpg,.png,.jpeg"
          multiple
          updateFilesCb={updateUploadedFiles}
          limit="3"
        />
        <button type="submit">SUBIR</button>
      </form>
    </div>
  );
}

export default Dropzone;
