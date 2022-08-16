import Field from "./container/Field";
import FieldProvider from "./context/FieldProvider";

const index = () => {
  return (
    <FieldProvider>
      <Field />
    </FieldProvider>
  );
};

export default index;
