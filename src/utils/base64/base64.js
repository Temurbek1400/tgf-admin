import { Buffer } from "buffer";
import { isTypeOf } from "utils";

const base64 = {
  decode(str) {
    return isTypeOf(str, "string")
      ? Buffer.from(str, "base64").toString("utf8")
      : "null";
  },
  encode(str) {
    return isTypeOf(str, "string")
      ? Buffer.from(str, "utf8").toString("base64")
      : "null";
  },
};

export default base64;
