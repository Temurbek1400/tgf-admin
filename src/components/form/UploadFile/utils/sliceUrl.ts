export const sliceUrl = (string: string) => {
  if (string) {
    let startIndex: number = string.lastIndexOf(".");
    let lastIndex: number = string.length;
    return (
      string.slice(0, 22) +
      "......" +
      string.slice(startIndex - 7, startIndex) +
      string.slice(startIndex, lastIndex)
    );
  }
  return "";
};
