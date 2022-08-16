import React from "react";

export interface IDateInput{
    value: string;
    setValue: React.Dispatch<React.SetStateAction<any>>
    label: string;

}