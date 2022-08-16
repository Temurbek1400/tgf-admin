import { useContext, useEffect, useState } from "react";
import { Input, PaginationTable, RightSidebar, Select } from "components";
import { REQUEST_STATUS } from "hooks/useRequest/useRequest.constants";
import get from "lodash.get";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import PositionContext from "../context/PositionContext";
import { IUsePosition } from "../context/PositionContext.type";
import { columns, FORM_NAMES } from "./Position.constant";
import { IPosition } from "./Position.types";

const Position = () => {
  const {
    state: {
      createPositionStates: {
        createPositionData,
        createPositionStatus,
        // createPositionError,
      },
      editPositionState: { editPositionStatus },
    },
    actions: { createPosition, editPosition },
  } = useContext<IUsePosition>(PositionContext);
  const {
    handleSubmit,
    formState: { errors },
    reset,
    control,
    getValues,
  } = useForm({
    defaultValues: {
      [FORM_NAMES.en]: "",
      [FORM_NAMES.ru]: "",
      [FORM_NAMES.uz]: "",
    },
  });
  const createEdit = (positionData: any) => {
    if (editingPosition?._id) {
      const body = {
        _id: editingPosition?._id,
        name: {
          ...positionData,
        },
      };
      editPosition(body);
      setEditingPosition(undefined);
    } else createPosition(positionData);
  };

  const [open, setOpen] = useState<boolean>(false);
  const [editingPosition, setEditingPosition] = useState<IPosition>();
  const [renderTable, setRenderTable] = useState(false);
  useEffect(() => {
    if (createPositionStatus === REQUEST_STATUS.success) {
      toast.success(get(createPositionData, "message"));
      setRenderTable((prev) => !prev);
      setOpen(false);
    }
  }, [createPositionStatus]);

  useEffect(() => {
    if (editPositionStatus === REQUEST_STATUS.success) {
      toast.success(get(createPositionData, "message", "Edited"));
      setRenderTable((prev) => !prev);
      setOpen(false);
      reset({
        [FORM_NAMES.uz]: "",
        [FORM_NAMES.ru]: "",
        [FORM_NAMES.en]: "",
      });
    }
  }, [editPositionStatus]);

  useEffect(() => {
    if (editingPosition?._id) {
      reset({
        [FORM_NAMES.uz]: editingPosition.name.uz,
        [FORM_NAMES.ru]: editingPosition.name.ru,
        [FORM_NAMES.en]: editingPosition.name.en,
      });
    }
  }, [editingPosition]);



  return (
    <div>
      <RightSidebar
        setOpen={setOpen}
        open={open}
        form="Position"
        title={editingPosition?._id ? "Edit Position" : "Add Position"}
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
          id="Position"
        >
          <Input
            FORM_NAMES={FORM_NAMES}
            name={FORM_NAMES.en}
            control={control}
            placeholder={"Name in English *"}
            errors={errors}
            rules={{ required: { value: true, message: "Field required" } }}
          />

          <Input
            FORM_NAMES={FORM_NAMES}
            name={FORM_NAMES.ru}
            control={control}
            placeholder={"Name in Russian *"}
            errors={errors}
            rules={{ required: { value: true, message: "Field required" } }}
          />
          <Input
            FORM_NAMES={FORM_NAMES}
            name={FORM_NAMES.uz}
            placeholder={"Name in Uzbek *"}
            control={control}
            errors={errors}
            rules={{ required: { value: true, message: "Field required" } }}
          />
        </form>
      </RightSidebar>
      <PaginationTable
        columns={columns}
        url={"position"}
        onOpenSidebar={setOpen}
        render={renderTable}
        onRowClick={(row) => {
          setEditingPosition(row);
          setOpen(true);
        }}
      />
    </div>
  );
};

export default Position;
