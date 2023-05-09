import * as yup from "yup";
import { IAd } from "../interfaces";

export const AdvertsementSchema = yup.object<IAd>().shape({
  name: yup.string().required(),
  model: yup.string().required(),
  year: yup.string().required(),
  km: yup.number().required(),
  fuel_type: yup.number().required(),
  color: yup.string(),
  fipe: yup.number().required(),
  price: yup.number().required(),
  description: yup.string(),
  ad_status: yup.string(),
  images: yup.array().of(yup.object({ value: yup.string() })),
});

export const AdvertsementEditSchema = yup.object<IAd>().shape({
  name: yup.string().optional(),
  model: yup.string().optional(),
  year: yup.string().optional(),
  km: yup.number().optional(),
  fuel_type: yup.number().optional(),
  color: yup.string(),
  fipe: yup.number().optional(),
  price: yup.number().optional(),
  description: yup.string(),
  ad_status: yup.string(),
  images: yup.array().of(yup.object({ value: yup.string() })),
});
