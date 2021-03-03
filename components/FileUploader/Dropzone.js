import React, { useState } from "react";
import FileUpload from "./file-upload";
import Navbar from "../navbar/Navbar";
import styles from "../../styles/Dropzone.module.css";
function Dropzone() {
  const [myFiles, setMyFiles] = useState({});

  const updateUploadedFiles = (files) =>
    // setNewUserInfo({ ...newUserInfo, profileImages: files });
    setMyFiles(files);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(myFiles);
  };

  return (
    <div className={styles.dropzone__container}>
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
