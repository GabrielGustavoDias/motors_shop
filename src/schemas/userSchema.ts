import * as yup from "yup";
import { IUser } from "../interfaces";
import { IEditUser, ILoginUser } from "../interfaces/userInterfaces";
import { addressSchema } from "./adddressSchema";
export const userLoginSchema = yup.object<ILoginUser>().shape({
  email: yup
    .string()
    .email("Must be a valid e-mail")
    .required("Email is Required"),
  password: yup.string().required("Password is Required"),
});

export const userRegisterSchema = yup.object<IUser>().shape({
  name: yup.string().required("O nome é obrigatorio"),
  email: yup
    .string()
    .email("Insira um email valido")
    .required("Email é obrigatorio"),
  password: yup
    .string()
    .min(8, "A senha deve conter ao menos 8 caracteres")
    .required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "As senhas não coincidem"),
  cpf: yup.string().min(14, "Deve ser nesse formato xxx.xxx.xxx-xx").required(),
  phone: yup
    .string()
    .min(14, "Deve ser nesse formato (DDD)xxxxx-xxxx")
    .required(),
  birth_date: yup.date().required().typeError("Deve ser uma data valida"),
  description: yup.string(),
  profile_image: yup.string(),
  account_type: yup.string(),
  address: addressSchema,
});

export const userEditSchema = yup.object<IEditUser>().shape({
  name: yup.string().optional(),
  email: yup.string().email("Must be a valid e-mail").optional(),
  cpf: yup.string().min(14, "Must be on the format xxx.xxx.xxx-xx").optional(),
  phone: yup
    .string()
    .min(14, "Must follow the format (DDD)xxxxx-xxxx")
    .optional(),
  birth_date: yup.date().optional().typeError("Must be a valid date"),
  description: yup.string(),
});
