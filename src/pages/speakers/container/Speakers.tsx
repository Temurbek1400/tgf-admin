import React, { useContext, useEffect, useState } from "react";
import { PaginationTable, Input, RightSidebar, UploadImage } from "components";
import { IColumn } from "components/common/PaginationTable/types/PaginationTable";
import { REQUEST_STATUS } from "hooks/useRequest/useRequest.constants";
import { ICommonRequest } from "layout/context/LayoutContext.types";
import get from "lodash.get";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import SpeakersContext from "../context/SpeakersContext";
import { FORM_NAMES } from "./Speakers.constant";
import { ISpeakersType, IUseSpeakers } from "../context/SpeakersContext.type";

const Speakers = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [renderTable, setRenderTable] = useState(false);
  const [editingSpeakers, setEditingSpeakers] = useState<any>();
  const columns: IColumn[] = [
    {
      name: "Ismi",
      dataKey: "name.uz",
    },
    {
      name: "Biosi",
      dataKey: "name.uz",
    },
  ];
  const {
    state: {
      createSpeakersStates: { createSpeakersData, createSpeakersStatus },
      editSpeakerState: { editSpeakerData, editSpeakerStatus },
    },
    actions: { createSpeakers, editSpeaker },
  } = useContext<IUseSpeakers>(SpeakersContext);
  const {
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    defaultValues: {
      [FORM_NAMES.en]: "",
      [FORM_NAMES.ru]: "",
      [FORM_NAMES.uz]: "",
      [FORM_NAMES.enBio]: "",
      [FORM_NAMES.ruBio]: "",
      [FORM_NAMES.uzBio]: "",
    },
  });
  const createEditSpeaker = (speakersData: any) => {
    const newBody = {
      name: {
        [FORM_NAMES.en]: speakersData.en,
        [FORM_NAMES.ru]: speakersData.ru,
        [FORM_NAMES.uz]: speakersData.uz,
      },
      bio: {
        [FORM_NAMES.en]: speakersData.enBio,
        [FORM_NAMES.ru]: speakersData.ruBio,
        [FORM_NAMES.uz]: speakersData.uzBio,
      },
      image: "some image",
    };
    createSpeakers(newBody);
  };

  useEffect(() => {
    if (createSpeakersStatus === REQUEST_STATUS.success) {
      toast.success(get(createSpeakersData, "message"));
      setRenderTable((prev) => !prev);
      setOpen(false);
    }
  }, [createSpeakersStatus]);
  useEffect(() => {
    if (editSpeakerStatus === REQUEST_STATUS.success) {
      toast.success(get(editSpeakerData, "message"));
      setRenderTable((prev) => !prev);
      setOpen(false);
    }
  }, [editSpeakerStatus]);
  useEffect(() => {
    if (editingSpeakers?._id) {
      reset({
        [FORM_NAMES.uz]: editingSpeakers.name.uz,
        [FORM_NAMES.ru]: editingSpeakers.name.ru,
        [FORM_NAMES.en]: editingSpeakers.name.en,
        [FORM_NAMES.enBio]: editingSpeakers.bio.uz,
        [FORM_NAMES.ruBio]: editingSpeakers.bio.ru,
        [FORM_NAMES.uzBio]: editingSpeakers.bio.en,
      });
    }
  }, [editingSpeakers]);

  return (
    <div>
      <RightSidebar
        form="speakers"
        setOpen={setOpen}
        onClose={() =>
          reset({
            [FORM_NAMES.uz]: "",
            [FORM_NAMES.ru]: "",
            [FORM_NAMES.en]: "",
          })
        }
        open={open}
        title={editingSpeakers?._id ? "Edit Speaker" : "Add Speaker "}
      >
        <div>
          <form
            onSubmit={handleSubmit(createEditSpeaker)}
            className="flex-column d-flex gap-3"
            id="speakers"
          >
            <Input
              FORM_NAMES={FORM_NAMES}
              name={FORM_NAMES.en}
              control={control}
              placeholder={"Name in English *"}
              errors={errors}
              rules={{
                required: { value: true, message: "Field required" },
              }}
            />

            <Input
              FORM_NAMES={FORM_NAMES}
              name={FORM_NAMES.ru}
              control={control}
              placeholder={"Name in Russian *"}
              errors={errors}
              rules={{
                required: { value: true, message: "Field required" },
              }}
            />
            <Input
              FORM_NAMES={FORM_NAMES}
              name={FORM_NAMES.uz}
              control={control}
              placeholder={"Name in Uzbek *"}
              errors={errors}
              rules={{
                required: { value: true, message: "Field required" },
              }}
            />
            <Input
              FORM_NAMES={FORM_NAMES}
              name={FORM_NAMES.enBio}
              control={control}
              placeholder={"Bio in English *"}
              errors={errors}
              rules={{
                required: { value: true, message: "Field required" },
              }}
            />
            <Input
              FORM_NAMES={FORM_NAMES}
              name={FORM_NAMES.ruBio}
              control={control}
              placeholder={"Bio in Russian *"}
              errors={errors}
              rules={{
                required: { value: true, message: "Field required" },
              }}
            />
            <Input
              FORM_NAMES={FORM_NAMES}
              name={FORM_NAMES.uzBio}
              control={control}
              placeholder={"Bio in Uzbek *"}
              errors={errors}
              rules={{
                required: { value: true, message: "Field required" },
              }}
            />
            <UploadImage
              control={control}
              FORM_NAMES={FORM_NAMES}
              name={FORM_NAMES.image}
              dataUrl=""
            />
          </form>
        </div>
      </RightSidebar>
      <PaginationTable
        url="speaker"
        columns={columns}
        onOpenSidebar={setOpen}
        render={renderTable}
        onRowClick={(row) => {
          setEditingSpeakers(row);
          setOpen(true);
        }}
      />
    </div>
  );
};

export default Speakers;
