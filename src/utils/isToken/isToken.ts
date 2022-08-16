import browserStorage from "services/storage/browserStorage";

const isToken = () => {
  return !!browserStorage.get<string | undefined | null>("token");
};

export default isToken;
