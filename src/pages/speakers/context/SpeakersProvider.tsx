import { FC } from "react";
import SpeakersContext from "./SpeakersContext";
import useSpeakers from "./useSpeakers";

const SpeakersProvider: FC = ({ children }) => {
  const value = useSpeakers();
  return (
    <SpeakersContext.Provider value={value}>
      {children}
    </SpeakersContext.Provider>
  );
};

export default SpeakersProvider;
