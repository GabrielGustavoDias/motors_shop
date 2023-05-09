import { FieldValues, UseFormRegister } from "react-hook-form";
import { IAddress } from "./address";

export interface IUser {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  cpf?: string;
  phone?: string;
  birth_date?: string;
  description?: string;
  profile_image?: string;
  account_type?: string;
  address?: IAddress;
  register?: UseFormRegister<FieldValues>;
}

export interface IUserResponse {
  id: string;
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  cpf?: string;
  phone?: string;
  birth_date?: string;
  description?: string;
  profile_image?: string;
  account_type?: string;
  address?: IAddress;
  register?: UseFormRegister<FieldValues>;
}

export interface ILoginUser {
  email?: string;
  password?: string;
  register?: UseFormRegister<FieldValues>;
}

export interface IEditUser {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  cpf?: string;
  phone?: string;
  birth_date?: string;
  description?: string;
  register?: UseFormRegister<FieldValues>;
}
export interface IRecoverPass {
  password: string;
  confirmPassword: string;
}
