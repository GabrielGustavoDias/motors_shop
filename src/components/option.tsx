import React from "react";

export const Option = ({ data }) => {
  const newData = data.split("");
  newData[0] = newData[0].toUpperCase();
  const name = newData.join("");
  return <option value={data}>{name}</option>;
};
