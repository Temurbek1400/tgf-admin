import { IColumn } from "components/common/PaginationTable/types/PaginationTable";

export const FORM_NAMES = {
  uz: "uz",
  en: "en",
  ru: "ru",
  type: "type",
  startTime: "startTime",
  endTime: "endTime",
  speaker: "speaker",
};

export const AGENDA_LIST = [
  {
    _id: "activity",
    name: {
      uz: "Activity",
    },
  },
  {
    _id: "speaker",
    name: {
      uz: "Speaker",
    },
  },
];

export const columns: IColumn[] = [
  {
    name: "Nomi",
    dataKey: "name.uz",
  },
  {
    name: "Type",
    dataKey: "type",
  },
  {
    name: "Start",
    renderItem: (item) => {
      return item?.startTime.split(".")[0].split("T").join(" ");
    },
  },
  {
    name: "End",
    renderItem: (item) => {
      return item?.endTime.split(".")[0].split("T").join(" ");
    },
  },
  {
    name: "Duration",
    renderItem: (item) => {
      let day: number =
        Number(item?.endTime.split(".")[0].split("T")[0].split("-")[2]) -
        Number(item?.startTime.split(".")[0].split("T")[0].split("-")[2]);
      let hour =
        Number(item?.endTime?.split("T")[1]?.split(":")[0]) -
        Number(item?.startTime?.split("T")[1]?.split(":")[0]);
      if (hour < 0) {
        hour = hour + 24;
      }
      return hour !== 0 ? hour + (hour === 1 ? " hour" : " hours") : "";
    },
  },
  {
    name: "Speaker",
    renderItem: (item) => {
      return item?.type === "activity" ? "---" : item.speaker.name.uz;
    },
  },
  {
    name: "Theme",
    dataKey: "type",
  },
];

// export interface IForm{
// [key:string]:TKey
// }

// type TKey="en" | "ru" | "uz" | "type" | "startTime" | "endTime" | "spikerId"
