import { useRequest } from "hooks/useRequest/useRequest";
import {  IUseSettings } from "./SettingsContext.type";

const useSettings = (): IUseSettings => {
  const [
    setMapClient,
    setMapData,
    setMapStatus,
    setMapError,
  ] = useRequest();

  const setMap = (setMapRequest: any) => {
    setMapClient.post("/settings/map", { ...setMapRequest });
  };
  return {
    state: {
      setMapStates: {
        setMapData,
        setMapStatus,
        setMapError,
      },
    },
    actions: { setMap },
  };
};

export default useSettings;
