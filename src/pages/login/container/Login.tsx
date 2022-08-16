import React, { useContext, useEffect } from "react";
import { Input } from "components";
import { useForm } from "react-hook-form";
import { FORM_NAMES } from "../constants/Login";
import { LoginStyled } from "../style/Login";
import { ILoginRequestData } from "../context/LoginContext.types";
import { LoginContext } from "../context";
import { REQUEST_STATUS } from "hooks/useRequest/useRequest.constants";
import browserStorage from "services/storage/browserStorage";
import get from "lodash.get";
import { Button } from "@mui/material";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginRequestData>();

  const {
    state: {
      loginStates: { loginData, loginStatus, loginError },
    },
    actions: { login },
  } = useContext(LoginContext);

  const loginFormSubmit = (loginFormData: ILoginRequestData) => {
    console.log(loginFormData);
    login(loginFormData);
  };

  useEffect(() => {
    if (loginStatus === REQUEST_STATUS.success) {
      browserStorage.set("token", get(loginData, "data.token", ""));
      toast.success(get(loginData, "message"));
      navigate("/");
    }
  }, [loginStatus]);

  return (
    <LoginStyled>
      <div className="login">
        <h2 className="login-page-title mb-4">Welcome back!</h2>
        <form onSubmit={handleSubmit(loginFormSubmit)}>
          <Input
            control={control}
            errors={errors}
            rules={{ required: { value: true, message: "Field required" } }}
            FORM_NAMES={FORM_NAMES}
            name={FORM_NAMES.phoneNumber}
            label="Phone number"
            className="mb-3"
          />
          <Input
            control={control}
            errors={errors}
            rules={{ required: { value: true, message: "Field required" } }}
            FORM_NAMES={FORM_NAMES}
            name={FORM_NAMES.password}
            label="Password"
            className="mb-4"
          />
          <Button variant="contained" color="primary" type="submit">
            Login
          </Button>
        </form>
      </div>
    </LoginStyled>
  );
};

export default Login;
