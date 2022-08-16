import { Input, PaginationTable, RightSidebar, Select } from "components";
import { IColumn } from "components/common/PaginationTable/types/PaginationTable";
import DateInput from "components/form/DateInput/DateInput";
import { REQUEST_STATUS } from "hooks/useRequest/useRequest.constants";
import { ICommonRequest } from "layout/context/LayoutContext.types";
import get from "lodash.get";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import AgendaContext from "../context/AgendaContext";
import { IAgenda, IUseAgenda } from "../context/AgendaContext.type";
import { AGENDA_LIST, columns, FORM_NAMES } from "./Agenda.constant";
import { StyledAgenda } from "./Agenda.style";

const Agenda = () => {
  const {
    state: {
      createAgendaStates: { createAgendaData, createAgendaStatus },
      getSpeakerStates: { getSpeakerData, getSpeakerStatus },
      editAgendaStates: { editAgendaData, editAgendaStatus },
    },
    actions: { createAgenda, editAgenda, getSpeaker },
  } = useContext<IUseAgenda>(AgendaContext);

  const {
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    control,
  } = useForm();

  const [editingAgenda, setEditingAgenda] = useState<IAgenda>();
  const [open, setOpen] = useState<boolean>(false);
  const [isSpeaker, setIsSpeaker] = useState<boolean>(true);
  const [renderTable, setRenderTable] = useState(false);
  const [startTime, setStartTime] = useState<any>("");
  const [endTime, setEndTime] = useState<string>("2022-08-18T17:02:00");

  const createEdit = (agendaData: any) => {
    const { _id } = agendaData[FORM_NAMES.type];
    if (editingAgenda?._id) {
      const body = {
        _id: editingAgenda._id,
        speakerId: agendaData[FORM_NAMES.speaker]?._id,
        type: _id,
        startTime: startTime,
        endTime: endTime,
        name: {
          [FORM_NAMES.en]: agendaData[FORM_NAMES.en],
          [FORM_NAMES.ru]: agendaData[FORM_NAMES.ru],
          [FORM_NAMES.uz]: agendaData[FORM_NAMES.uz],
        },
      };
      editAgenda(body);

      setEditingAgenda(undefined);
    } else
      createAgenda({
        type: _id,
        startTime: startTime,
        endTime: endTime,
        speakerId: agendaData[FORM_NAMES.speaker]?._id,
        name: {
          [FORM_NAMES.en]: agendaData[FORM_NAMES.en],
          [FORM_NAMES.ru]: agendaData[FORM_NAMES.ru],
          [FORM_NAMES.uz]: agendaData[FORM_NAMES.uz],
        },
      });
  };

  useEffect(() => {
    if (createAgendaStatus === REQUEST_STATUS.success) {
      toast.success(get(createAgendaData, "message"));
      setOpen(false);
      setRenderTable((prev) => !prev);
      reset({
        [FORM_NAMES.uz]: "",
        [FORM_NAMES.ru]: "",
        [FORM_NAMES.en]: "",
      });
      setStartTime("");
      setEndTime("");
    }
  }, [createAgendaStatus]);

  useEffect(() => {
    if (editAgendaStatus === REQUEST_STATUS.success) {
      toast.success(get(editAgendaData, "message", "Edited"));
      setRenderTable((prev) => !prev);
      setOpen(false);
      reset({
        [FORM_NAMES.uz]: "",
        [FORM_NAMES.ru]: "",
        [FORM_NAMES.en]: "",
      });
      setStartTime("");
      setEndTime("");
    }
  }, [editAgendaStatus]);

  useEffect(() => {
    if (editingAgenda?._id) {
      if (editingAgenda.type === "speaker") {
        setIsSpeaker(true);
      } else {
        setIsSpeaker(false);
      }
      setStartTime(editingAgenda.startTime.split(".")[0]);
      setEndTime(editingAgenda.endTime.split(".")[0]);
      const changingInputs = {
        [FORM_NAMES.uz]: editingAgenda.name.uz,
        [FORM_NAMES.ru]: editingAgenda.name.ru,
        [FORM_NAMES.en]: editingAgenda.name.en,
        [FORM_NAMES.speaker]: editingAgenda.speaker,
        [FORM_NAMES.type]: {
          name: {
            uz: editingAgenda.type === "activity" ? "Activity" : "Speaker",
          },
          _id: editingAgenda.type,
        },
      };
      reset(changingInputs);
    }
  }, [editingAgenda]);

  useEffect(() => {
    getSpeaker();
  }, []);

  return (
    <StyledAgenda>
      <RightSidebar
        setOpen={setOpen}
        open={open}
        form="agenda"
        title={editingAgenda?._id ? "Edit agenda" : "Add agenda"}
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
          id="agenda"
        >
          <Select
            FORM_NAMES={FORM_NAMES}
            name={FORM_NAMES.type}
            control={control}
            placeholder={"Type Speaker or Activity"}
            errors={errors}
            rules={{ required: { value: true, message: "Field required" } }}
            options={AGENDA_LIST}
            onChangeSelect={(item: any, e: any) => {
              if (item?._id === "speaker") setIsSpeaker(true);
              else setIsSpeaker(false);
            }}
          />
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

          <DateInput
            setValue={setStartTime}
            value={startTime}
            label="Start time"
          />
          <DateInput setValue={setEndTime} value={endTime} label="End time " />
          <Select
            FORM_NAMES={FORM_NAMES}
            name={FORM_NAMES.speaker}
            control={control}
            placeholder={"Speaker"}
            errors={errors}
            disabled={isSpeaker ? false : true}
            value={editingAgenda && editingAgenda?.speaker?.name}
            options={
              getSpeakerStatus === REQUEST_STATUS.success &&
              get(getSpeakerData, "data.data")
            }
            dataKey={"name"}
          />
        </form>
      </RightSidebar>
      <PaginationTable
        url="agenda"
        columns={columns}
        onOpenSidebar={setOpen}
        render={renderTable}
        onRowClick={(row) => {
          setEditingAgenda(row);
          setOpen(true);
        }}
      />
    </StyledAgenda>
  );
};

export default Agenda;
