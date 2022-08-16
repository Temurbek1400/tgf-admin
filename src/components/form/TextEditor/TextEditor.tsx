import React, { FC } from "react";
import { TextEditorStyled } from "./TextEditor.style";
import { TextEditorPropsType } from "./TextEditor.types";

const TextEditor: FC<TextEditorPropsType> = (props) => {
  const { value, onChange, onImageUpload, isError, controls } = props;
  return (
    <TextEditorStyled
      isError={!!isError}
      value={value}
      // @ts-ignore
      onChange={onChange}
      onImageUpload={onImageUpload}
      controls={controls}
    ></TextEditorStyled>
  );
};

export default TextEditor;
