import styled from "styled-components";

export const FileUploadContainer = styled.section`
  position: relative;
  margin: 1rem;
  border: 2px dotted lightgray;
  padding: 35px 20px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

export const FormField = styled.input`
  font-size: 18px;
  display: block;
  width: 100%;
  border: none;
  text-transform: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;

  &:focus {
    outline: none;
  }
`;

export const InputLabel = styled.label`
  top: -21px;
  font-size: 13px;
  color: black;
  left: 0;
  position: absolute;
`;

export const DragDropText = styled.p`
  font-weight: bold;
  letter-spacing: 2.2px;
  margin-top: 0;
  text-align: center;
`;

export const UploadFileBtn = styled.button`
  box-sizing: border-box;
  appearance: none;
  background-color: transparent;
  border: 2px solid #000000;
  cursor: pointer;
  font-size: 1rem;
  line-height: 1;
  padding: 1.1em 2.8em;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  border-radius: 6px;
  color: #000000;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 350ms ease-in-out;
  font-family: "Open Sans", sans-serif;
  width: 25%;
  display: flex;
  align-items: center;
  padding-right: 0;
  justify-content: center;

  i {
    font-size: 22px;
    margin-right: 5px;
    border-right: 2px solid;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media only screen and (max-width: 500px) {
    width: 70%;
  }

  @media only screen and (max-width: 350px) {
    width: 100%;
  }

  &:focus {
    outline: 0;
    background: transparent;
  }

  &:disabled {
    opacity: 0.4;
    filter: grayscale(100%);
    pointer-events: none;
  }
`;

export const FilePreviewContainer = styled.article`
  margin-bottom: 35px;

  span {
    font-size: 1.15rem;
  }
`;

export const PreviewList = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 10px;

  @media only screen and (max-width: 400px) {
    flex-direction: column;
  }
`;

export const FileMetaData = styled.div`
  display: ${(props) => (props.isImageFile ? "none" : "flex")};
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 10px;
  border-radius: 6px;
  color: #000000;
  font-weight: bold;
  aside {
    margin-top: auto;
    display: flex;
    justify-content: space-between;
  }
`;

export const RemoveFileIcon = styled.i`
  cursor: pointer;

  &:hover {
    transform: scale(1.35);
  }
`;

export const ImagePreview = styled.img`
  border-radius: 6px;
  width: 100%;
  height: auto;
`;

export const PreviewContainer = styled.section`
  padding: 0.25rem;
  width: 15rem;
  height: 100%;
  border-radius: 6px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: relative;

  :hover {
    div {
      display: flex;
      height: 100%;
      position: absolute;
      -webkit-text-fill-color: white; /* Will override color (regardless of order) */
      -webkit-text-stroke-width: 0.8px;
      -webkit-text-stroke-color: black;
    }
    img {
      filter: blur(3px) grayscale(20%);
      -webkit-filter: blur(3px) grayscale(20%);
    }
  }

  @media only screen and (max-width: 750px) {
    width: 25%;
  }

  @media only screen and (max-width: 500px) {
    width: 50%;
  }

  @media only screen and (max-width: 400px) {
    width: 100%;
    padding: 0 0 0.4em;
  }
`;

/* filter: blur(50px);
-webkit-filter: blur(50px); */
