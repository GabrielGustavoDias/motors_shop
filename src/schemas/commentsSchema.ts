import * as yup from "yup";
export const comments = yup.object({
  text: yup.string(),
});
