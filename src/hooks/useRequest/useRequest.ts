import axios from "../../services/client/client";
import { useState } from "react";
// import toast from "react-hot-toast";

import { REQUEST_STATUS } from "./useRequest.constants";
import { TApiRequestMetod } from "./useRequest.types";
import toast from "react-hot-toast";

export const useRequest = () => {
  const [data, setData] = useState<any | undefined>();
  const [status, setStatus] = useState<string>(REQUEST_STATUS.initial);
  const [error, setError] = useState<any>();

  const get = async (url: string) => await sendRequest("get", url);

  const post = async (url: string, data: any) =>
    await sendRequest("post", url, data);

  const put = async (url: string, data: any) =>
    await sendRequest("put", url, data);

  const deleteRequest = async (url: string, data: any) =>
    await sendRequest("delete", url, { data });

  const sendRequest = async (
    method: TApiRequestMetod,
    url: string,
    data?: any
  ) => {
    console.log("request+ ", method + "; body: ", data);
    setStatus(REQUEST_STATUS.loading);
    try {
      const res = await axios[method](url, data);
      setData(res.data);
      setStatus(REQUEST_STATUS.success);
    } catch (err: any) {
      setError(err);
      setStatus(REQUEST_STATUS.failed);
      console.log(err?.response);
      toast.error(err?.response?.data?.message);
    }
  };

  return [
    {
      get,
      post,
      put,
      deleteRequest,
    },
    data,
    status,
    error,
  ];
};
