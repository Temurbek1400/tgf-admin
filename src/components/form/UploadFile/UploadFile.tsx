import get from "lodash.get";
import React, {
  createRef,
  FC,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { Controller } from "react-hook-form";
import { useRequest } from "../../../hooks/useRequest/useRequest";
import { REQUEST_STATUS } from "../../../hooks/useRequest/useRequest.constants";
import { firstErrorField } from "../../../utils/firstErrorField/firstErrorField";
import ErrorMessage from "../../common/ErrorMessage/ErrorMessage";
import UploadFileIcon from "./assets/UploadFileIcon";
import {
  FocusInputStyled,
  UploadFileIconLoader,
  UploadFileStyled,
} from "./UploadFile.style";
import { UploadFilePropsType } from "./UploadFile.types";
import { setErrorFunction } from "./utils/setErrorFunction";
import { sliceUrl } from "./utils/sliceUrl";

const UploadFile: FC<UploadFilePropsType> = (props) => {
  const {
    upload = () => {},
    name = "file",
    dataUrl,
    setValue,
    className = "",
    defaultImageUrl = undefined,
    control,
    errors,
    rules = { required: false },
    setError,
    clearErrors,
    id,
    FORM_NAMES,
  } = props;

  const [client, data, status] = useRequest();
  const [img, setImg] = useState<undefined | string>(undefined);
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
    alert("Kechirasiz hozircha api url yoq shunga upload bolmaydi");
    if (e.target.files[0]) {
      try {
        // const formState = new FormData();
        // formState.append("file", e.target.files[0]);
        // formState.append("type", "img");
        // await client.post(
        //   "https://bookuz.kahero.uz/user-api/upload",
        //   formState
        // );
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
    if (status === REQUEST_STATUS.success) {
      setValue(name, data?.data);
      upload(data?.data);
      setImg(data?.data);
      clearErrors(name);
    } else if (status === REQUEST_STATUS.failed) {
      setImg(undefined);
      setValue(name, null);
      setErrorFunction(name, setError, errors);
    }
  }, [status]);

  const renderIcon = () => {
    if (status === REQUEST_STATUS.loading) {
      return <UploadFileIconLoader />;
    } else {
      return <UploadFileIcon width="17px" height="17px" />;
    }
  };

  return (
    <div className={className}>
      <FocusInputStyled type="text" ref={uploadRef} />
      <UploadFileStyled
        isError={!!errors && !!get(errors, `${name}`, undefined)}
      >
        <label htmlFor={id}>
          <Controller
            name={name}
            rules={rules}
            control={control}
            render={({ field: { onChange, value, ...field } }) => {
              return (
                <input
                  className="uploadFile"
                  type="file"
                  id={id}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    fileUpload(e);
                  }}
                  accept={".svg, .png, .jpg, .jpeg, .ico, .webp"}
                  disabled={status === REQUEST_STATUS.loading}
                  {...field}
                />
              );
            }}
          />

          <div className="url">{img ? sliceUrl(img) : null}</div>
        </label>
        <div className="uploadFileIcon">{renderIcon()}</div>
      </UploadFileStyled>
      {errors && !!get(errors, `${name}`, undefined) && (
        <ErrorMessage value={get(errors, `${name}`)?.message} />
      )}
    </div>
  );
};

export default UploadFile;
