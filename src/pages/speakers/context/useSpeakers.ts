import { useRequest } from "hooks/useRequest/useRequest";
import { ICommonRequest } from "layout/context/LayoutContext.types";
import { IUseSpeakers } from "./SpeakersContext.type";

const useSpeakers = (): IUseSpeakers => {
  const [
    createSpeakersClient,
    createSpeakersData,
    createSpeakersStatus,
    createSpeakersError,
  ] = useRequest();

  const createSpeakers = (body: {
    name: ICommonRequest;
    bio: ICommonRequest;
  }) => {
    createSpeakersClient.post("/speaker", body);
  };

  const [
    editSpeakerClient,
    editSpeakerData,
    editSpeakerStatus,
    editSpeakerError,
  ] = useRequest();
  const editSpeaker = async (body: any) => {
    await editSpeakerClient.put(`/speaker`, body);
  };

  return {
    state: {
      createSpeakersStates: {
        createSpeakersData,
        createSpeakersStatus,
        createSpeakersError,
      },
      editSpeakerState: {
        editSpeakerData,
        editSpeakerStatus,
        editSpeakerError,
      },
    },
    actions: { createSpeakers, editSpeaker },
  };
};

export default useSpeakers;
