import styled from "styled-components";

export const UploadContent = styled.div<any>`
  position: relative;
  width: 90px;
  height: 90px;
  background-color: #fff;
  border: 1px solid ${(props) => (props.error ? "red" : "#f1f1f1")};
  border-radius: 8px;
  overflow: hidden;
  label {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    &:hover {
      cursor: pointer;
    }
    input {
      display: none;
    }
    .uploadIcon {
      width: 24px;
      height: 24px;
      svg {
        width: 100%;
        height: 100%;
      }
    }
    .uploadImage {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      z-index: 2;
      width: 100%;
      height: 100%;
      background-color: #fff;
    }
    .loaderContent {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      z-index: 2;
      display: flex;
      justify-content: center;
      align-items: center;
      .MuiCircularProgress-root.MuiCircularProgress-indeterminate {
        width: 30px !important;
        height: 30px !important;
      }
    }
  }
  label.loading {
    opacity: 0.4;
  }
`;
