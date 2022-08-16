// @ts-ignore
import RichTextEditor from "@mantine/rte";
import get from "lodash.get";
import styled from "styled-components";
import { ITextEditorStyled } from "./TextEditor.types";

export const TextEditorStyled = styled(RichTextEditor)<ITextEditorStyled>`
  z-index: 0;
  border: 1px solid
    ${({ isError, theme }) => (isError ? "red" : get(theme, "grey.main"))};
  .quill {
    .ql-container {
      .ql-editor {
        min-height: 300px;
      }
    }
  }
  .ql-editing {
    left: 30px !important;
  }
`;
