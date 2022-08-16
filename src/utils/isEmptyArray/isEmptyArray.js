export default function isEmptyArray(array) {
  if (!array) return undefined;
  if (array.length === 0) return true;
  return array.reduce((res, item) => {
    if (!item && item !== 0) return true;
    return res;
  }, false);
}
