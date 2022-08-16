export interface TextEditorPropsType {
  onImageUpload?: any;
  value?: any;
  onChange?: (e: any) => void;
  isError?: boolean;
  controls?: any;
  // {[
  //   ['bold', 'italic', 'underline', 'link', 'image'],
  //   ['unorderedList', 'h1', 'h2', 'h3'],
  //   ['sup', 'sub'],
  //   ['alignLeft', 'alignCenter', 'alignRight'],
  // ]} ! Here is an example for controls
}

export interface ITextEditorStyled {
  isError: boolean;
}
