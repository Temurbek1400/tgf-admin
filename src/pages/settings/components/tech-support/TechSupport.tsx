import { Input, RightSidebar } from "components";
import PaginationTable from "components/common/PaginationTable/container/PaginationTable";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { columns, FORM_NAMES } from "./TechSupport.constant";

const TechSupport = () => {
  const [open, setOpen] = useState<boolean>(false);
  const {
    // handleSubmit,
    formState: { errors },
    reset,
    // setValue,
    control,
  } = useForm();

  const [renderTable, setRenderTable] = useState(false);


  return (
    <div>
      <RightSidebar
        form="settings/support"
        setOpen={setOpen}
        open={open}
        onClose={() =>
          reset({
            [FORM_NAMES.uz]: "",
            [FORM_NAMES.ru]: "",
            [FORM_NAMES.en]: "",
          })
        }
      >
        <form id="settings/support">
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
            placeholder="Name in Uzbek"
          />
        </form>
      </RightSidebar>

      <PaginationTable
        url="agenda"
        columns={columns}
        onOpenSidebar={setOpen}
        render={renderTable}
        onRowClick={(row) => {
          // setEditingAgenda(row);
          setOpen(true);
        }}
      />
    </div>
  );
};

export default TechSupport;
