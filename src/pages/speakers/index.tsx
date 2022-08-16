import Speakers from "./container/Speakers";
import SpeakersProvider from "./context/SpeakersProvider";

const index = () => {
  return (
    <SpeakersProvider>
      <Speakers />
    </SpeakersProvider>
  );
};

export default index;
