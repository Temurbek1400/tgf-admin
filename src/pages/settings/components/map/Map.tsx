import { UploadImage } from "components";
import SettingsContext from "pages/settings/context/SettingsContext";
import { IUseSettings } from "pages/settings/context/SettingsContext.type";
import { useContext } from "react";
import { useForm } from "react-hook-form";

const FORM_NAMES = {
  image: "image",
};

const Map = () => {
  const { control } = useForm();
  const {
    state: {setMapStates:{
      setMapData,
    }},
    actions: {setMap},
  } = useContext<IUseSettings>(SettingsContext);
  return (
    <div>
      <UploadImage
        FORM_NAMES={FORM_NAMES}
        control={control}
        name={FORM_NAMES.image}
        id="image"
        setMap={setMap}
      />
    </div>
  );
};

export default Map;
