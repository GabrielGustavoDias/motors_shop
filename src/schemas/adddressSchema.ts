import * as yup from "yup";
import { IAddress } from "../interfaces";

export const addressSchema = yup.object<IAddress>().shape({
  cep: yup.string().max(10, "Must be a valid cep").required("Cep is required"),
  street: yup.string().required("Street is required"),
  additional_info: yup.string(),
  number: yup.number().required().typeError("Number is required"),
  state: yup
    .string()
    .max(2, "Must have 2 letters")
    .required("State is required"),
  city: yup.string().required("City is required"),
});

export const addressEditSchema = yup.object<IAddress>().shape({
  cep: yup.string().max(10, "Must be a valid cep").optional(),
  street: yup.string().optional(),
  additional_info: yup.string(),
  number: yup.number().optional(),
  state: yup.string().max(2, "Must have 2 letters").optional(),
  city: yup.string().optional(),
});
