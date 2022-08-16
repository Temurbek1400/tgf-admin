import React, {
  FC,
  Suspense,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { CircularProgress } from "@mui/material";
import { Controller } from "react-hook-form";
import { IUploadImageProps } from "./UploadImage.types";
import { REQUEST_STATUS } from "../../../hooks/useRequest/useRequest.constants";
import UploadIcon from "./assets/UploadImageIcon";
import { useRequest } from "../../../hooks/useRequest/useRequest";
import { UploadContent } from "./UploadImage.style";
import Label from "../Label/Label";
import ErrorMessage from "../../common/ErrorMessage/ErrorMessage";
import { setErrorFunction } from "../UploadFile/utils/setErrorFunction";
import { FocusInputStyled } from "../UploadFile/UploadFile.style";
import { firstErrorField } from "../../../utils/firstErrorField/firstErrorField";
import get from "lodash.get";
import toast from "react-hot-toast";
import { IResponseData } from "hooks/useRequest/useRequest.types";

const UploadImage: FC<IUploadImageProps> = ({
  upload = () => {},
  errors,
  control,
  FORM_NAMES,
  name = "file",
  dataUrl = "",
  accept = ".svg, .png, .jpg, .jpeg, .ico, .webp ",
  setValue,
  clearErrors,
  setError,
  rules = { required: false },
  defaultImageUrl = "",
  label = "",
  id,
  setMap,
}) => {
  const [uploadClient, uploadData, uploadStatus, uploadError] = useRequest();
  const [img, setImg] = useState<string | undefined>("");
  interface IUploadData {
    data: IResponseData<string>;
    code: number;
    message: string;
  }

  const uploadRef = useRef<HTMLInputElement>(null);

  const focus = async () => {
    if (uploadRef.current !== null) {
      if (errors) {
        if (!!get(errors, `${name}`, undefined)) {
          let key = firstErrorField(FORM_NAMES, errors);

          if (key === name) {
            uploadRef?.current?.focus();
          }
        }
      }
    }
  };

  useEffect(() => {
    focus();
  }, [errors && get(errors, `${name}`), uploadRef]);

  useEffect(() => {
    if (!!defaultImageUrl) {
      setImg(defaultImageUrl);
      setValue(name, defaultImageUrl);
    }
  }, [defaultImageUrl]);

  const fileUpload = async (e: any) => {
    // alert("Kechirasiz hozircha api url yoq shunga upload bolmaydi");
    if (e.target.files[0]) {
      try {
        const formState = new FormData();
        formState.append("file", e.target.files[0]);
        formState.append("type", "img");
        await uploadClient.post("upload", formState);
      } catch (e: any) {
        setImg(undefined);
        setValue(name, null);
        setErrorFunction(name, setError, errors);
      }
    } else {
      setValue(name, null);
      setImg(undefined);
    }
  };

  useEffect(() => {
    if (uploadStatus === REQUEST_STATUS.success) {
      // setValue(uploadData?.data);
      upload(uploadData?.data);
      // setImg(uploadData?.data);
      // clearErrors(name);
      if (setMap) {
        setMap(get(uploadData, "data", ""));
      }
      console.log(get(uploadData, "data", ""));

      toast.success(uploadData?.message);
    } else if (uploadStatus === REQUEST_STATUS.failed) {
      setImg(undefined);
      setValue(name, null);
      setErrorFunction(name, setError, errors);
    }
  }, [uploadStatus]);

  const renderUploadContext = () => {
    if (uploadStatus === REQUEST_STATUS.initial) {
      if (img) {
        return (
          <img
            className="uploadImage"
            src={process.env.REACT_APP_BASE_URL + img}
            alt="Upload image"
            loading={"lazy"}
          />
        );
      } else
        return (
          <div className="uploadIcon">
            <UploadIcon />
          </div>
        );
    } else if (uploadStatus === REQUEST_STATUS.loading) {
      return (
        <div className=" loaderContent  justify-content-center align-items-center">
          <CircularProgress />
        </div>
      );
    } else if (uploadStatus === REQUEST_STATUS.success) {
      return (
        // <img
        //   className="uploadImage"
        //   src={"https://bookuz.kahero.uz/user-api/" + img}
        //   alt={"Upload image"}
        // />
        <div className="d-flex align-items-center justify-content-center">
          Uploaded
        </div>
      );
    } else
      return (
        <div className="uploadIcon">
          <UploadIcon />
        </div>
      );
  };

  const renderErrorMessage = useMemo(() => {
    if (!!errors) {
      if (!!get(errors, `${name}`, undefined)) {
        return <ErrorMessage value={get(errors, `${name}`)?.message} />;
      }
      return null;
    }
    return null;
  }, [errors && get(errors, `${name}`)]);

  return (
    <>
      {label && <Label value={label} />}
      <FocusInputStyled type="text" ref={uploadRef} />
      <UploadContent error={!!errors && !!get(errors, `${name}`, undefined)}>
        <label
          htmlFor={id}
          className={`${uploadStatus === REQUEST_STATUS.loading && "loading"}`}
        >
          <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field: { onChange, ...field } }) => (
              <input
                type="file"
                id={id}
                onChange={(e) => {
                  fileUpload(e);
                }}
                accept={accept}
                disabled={uploadStatus === REQUEST_STATUS.loading}
                {...field}
              />
            )}
          />
          {renderUploadContext()}
        </label>
      </UploadContent>
      {renderErrorMessage}
    </>
  );
};

export default UploadImage;
