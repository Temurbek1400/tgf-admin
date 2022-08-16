import { Input, PaginationTable, RightSidebar } from "components";
import { IColumn } from "components/common/PaginationTable/types/PaginationTable";
import { REQUEST_STATUS } from "hooks/useRequest/useRequest.constants";
import get from "lodash.get";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import FieldContext from "../context/FieldContext";
import { IUseFiled } from "../context/FieldContext.type";
import { IField } from "./Field.types";
import { columns, FORM_NAMES } from "./Filed.constant";

const Field = () => {
  const {
    state: {
      createFieldStates: {
        createFieldData,
        createFieldStatus,
      },
      editFieldStates: { editFieldData, editFieldStatus },
    },
    actions: { createField, editField },
  } = useContext<IUseFiled>(FieldContext);


  const {
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  const [editingField, setEditingField] = useState<IField>();
  const [open, setOpen] = useState<boolean>(false);
  const [renderTable, setRenderTable] = useState(false);

  const createEdit = (fieldData: any) => {
    if (editingField?._id) {
      const body = {
        _id: editingField?._id,
        name: {
          ...fieldData,
        },
      };
      editField(body);
      setEditingField(undefined);
    } else createField(fieldData);
  };

  useEffect(() => {
    if (createFieldStatus === REQUEST_STATUS.success) {
      toast.success(get(createFieldData, "message"));
      setOpen(false);
      setRenderTable((prev) => !prev);
      reset({
        [FORM_NAMES.uz]: "",
        [FORM_NAMES.ru]: "",
        [FORM_NAMES.en]: "",
      });
    }
  }, [createFieldStatus]);

  useEffect(() => {
    if (editFieldStatus === REQUEST_STATUS.success) {
      toast.success(get(editFieldData, "message", "Edited"));
      setRenderTable((prev) => !prev);
      setOpen(false);
      reset({
        [FORM_NAMES.uz]: "",
        [FORM_NAMES.ru]: "",
        [FORM_NAMES.en]: "",
      });
    }
  }, [editFieldStatus]);

  useEffect(() => {
    if (editingField?._id) {
      reset({
        [FORM_NAMES.uz]: editingField.name.uz,
        [FORM_NAMES.ru]: editingField.name.ru,
        [FORM_NAMES.en]: editingField.name.en,
      });
    }
  }, [editingField]);

  return (
    <div>
      <RightSidebar
        setOpen={setOpen}
        open={open}
        form="field"
        title={editingField?._id ? "Edit field" : "Add field"}
        onClose={() =>
          reset({
            [FORM_NAMES.uz]: "",
            [FORM_NAMES.ru]: "",
            [FORM_NAMES.en]: "",
          })
        }
      >
        <form
          onSubmit={handleSubmit(createEdit)}
          className="flex-column d-flex gap-3"
          id="field"
        >
          <Input
            FORM_NAMES={FORM_NAMES}
            name={FORM_NAMES.en}
            control={control}
            errors={errors}
            rules={{ required: { value: true, message: "Field required" } }}
            placeholder="Name in English *"
          />

          <Input
            FORM_NAMES={FORM_NAMES}
            name={FORM_NAMES.ru}
            control={control}
            errors={errors}
            rules={{ required: { value: true, message: "Field required" } }}
            placeholder="Name in Russian *"
          />
          <Input
            FORM_NAMES={FORM_NAMES}
            name={FORM_NAMES.uz}
            control={control}
            errors={errors}
            rules={{ required: { value: true, message: "Field required" } }}
            placeholder="Name in Uzbek *"
          />
        </form>
      </RightSidebar>
      <PaginationTable
        url="field"
        columns={columns}
        onOpenSidebar={setOpen}
        render={renderTable}
        onRowClick={(row) => {
          setEditingField(row);
          setOpen(true);
        }}
      />
    </div>
  );
};

export default Field;
