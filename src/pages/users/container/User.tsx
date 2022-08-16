import { useState, useContext, useEffect } from "react";
import { tableColumns, FORM_NAMES } from "./User.constant";
import { useForm } from "react-hook-form";

import {
  Input,
  PaginationTable,
  PhoneInput,
  RightSidebar,
  Select,
} from "components";
import { StyledUser } from "./User.style";
import UserContext from "./../context/UserContext";
import { IUseUser } from "../context/UserContext.type";
import { REQUEST_STATUS } from "hooks/useRequest/useRequest.constants";
import toast from "react-hot-toast";

const User = () => {
  const {
    formState: { errors },
    reset,
    handleSubmit,
    control,
  } = useForm({
    defaultValues: {
      [FORM_NAMES.field]: {},
      [FORM_NAMES.position]: {},
    },
  });
  const {
    state: {
      addUserStates: { addUserData, addUserStatus },
      editUserStates: { editUserData, editUserStatus },
      getFieldsStates: { getFieldsData, getFieldsStatus },
      getPositionsState: { getPositionsData, getPositionsStatus },
    },
    actions: { addUser, editUser, getFields, getPositions },
  } = useContext<IUseUser>(UserContext);
  const [open, setOpen] = useState<boolean>(false);
  const [renderTable, setRenderTable] = useState(false);
  const [editingUser, setEditingUser] = useState<any>();
  useEffect(() => {
    getFields();
    getPositions();
  }, []);
  useEffect(() => {
    if (addUserStatus === REQUEST_STATUS.success) {
      setRenderTable((prev) => !prev);
      toast.success(addUserData.message);
      setOpen(false);
    }
  }, [addUserStatus]);
  useEffect(() => {
    if (editUserStatus === REQUEST_STATUS.success) {
      setRenderTable((prev) => !prev);
      toast.success(editUserData.message);
      setOpen(false);
      setEditingUser(null);
      reset({
        [FORM_NAMES.name]: "",
        [FORM_NAMES.count]: "",
        [FORM_NAMES.brand]: "",
        [FORM_NAMES.number]: "",
        [FORM_NAMES.position]: "",
        [FORM_NAMES.field]: "",
      });
    }
  }, [editUserStatus]);

  useEffect(() => {
    if (editingUser?._id) {
      reset({
        [FORM_NAMES.name]: editingUser.fullName,
        [FORM_NAMES.count]: editingUser.employeeCount,
        [FORM_NAMES.brand]: editingUser.brand,
        [FORM_NAMES.number]: editingUser.phoneNumber,
        [FORM_NAMES.position]: editingUser.position,
        [FORM_NAMES.field]: editingUser.field,
      });
    }
  }, [editingUser]);

  const addEditUser = (values: any) => {
    let body = {
      brand: values.brand,
      employeeCount: +values.count,
      fullName: values.name,
      phoneNumber: values.number,
      positionId: values.position._id,
      fieldId: values.field._id,
    };
    if (!editingUser._id) {
      addUser(body);
    } else if (editingUser._id) {
      editUser({ ...body, _id: editingUser._id });
    }
  };

  return (
    <StyledUser>
      <RightSidebar form="user" title="user" open={open} setOpen={setOpen}>
        <form id="user" onSubmit={handleSubmit(addEditUser)} className="my-3">
          <Input
            FORM_NAMES={FORM_NAMES}
            name={FORM_NAMES.name}
            control={control}
            placeholder={"Full name"}
            errors={errors}
            rules={{ required: { value: true, message: "Field required" } }}
          />
          <PhoneInput
            FORM_NAMES={FORM_NAMES}
            name={FORM_NAMES.number}
            control={control}
            placeholder={"Phone number"}
            errors={errors}
            rules={{ required: { value: true, message: "Field required" } }}
          />
          <Input
            FORM_NAMES={FORM_NAMES}
            name={FORM_NAMES.brand}
            control={control}
            placeholder={FORM_NAMES.brand}
            errors={errors}
            rules={{ required: { value: true, message: "Field required" } }}
          />
          <Input
            FORM_NAMES={FORM_NAMES}
            name={FORM_NAMES.count}
            control={control}
            placeholder={FORM_NAMES.count}
            type="number"
            errors={errors}
            rules={{ required: { value: true, message: "Field required" } }}
          />
          <Select
            FORM_NAMES={FORM_NAMES}
            name={FORM_NAMES.field}
            control={control}
            placeholder={"Field"}
            options={
              getFieldsStatus === REQUEST_STATUS.success &&
              getFieldsData.data.data
            }
            dataKey={"name"}
            errors={errors}
            rules={{ required: { value: true, message: "Field required" } }}
          />
          <Select
            FORM_NAMES={FORM_NAMES}
            name={FORM_NAMES.position}
            control={control}
            placeholder={"Position"}
            options={
              getPositionsStatus === REQUEST_STATUS.success &&
              getPositionsData.data.data
            }
            dataKey={"name"}
            errors={errors}
            rules={{ required: { value: true, message: "Field required" } }}
          />
        </form>
      </RightSidebar>
      <PaginationTable
        columns={tableColumns}
        url="user"
        onOpenSidebar={setOpen}
        render={renderTable}
        onRowClick={(item) => {
          setOpen(true);
          setEditingUser(item);
        }}
      />
    </StyledUser>
  );
};

export default User;
