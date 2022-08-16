import React, { FC } from "react";
import { LabelStyled } from "./Label.style";
import { ILabelProps } from "./Label.types";

const Label: FC<ILabelProps> = ({ value, id }) => {
  return <LabelStyled className="mb-2" htmlFor={id}>{value}</LabelStyled>;
};

export default Label;
