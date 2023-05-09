import * as yup from "yup";
import { IRecoverPass } from "../interfaces";

export const recoverPassSchema = yup.object<IRecoverPass>().shape({
  password: yup.string().required("A senha é obrigatoria"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "As senhas não coincidem")
    .required("A senha é obrigatoria"),
});
