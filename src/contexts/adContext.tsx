import React, { createContext, useContext, useState } from "react";
import moment from "moment";
import { carMock } from "../mocks";
import { IAd } from "../interfaces";
import { translateToPt } from "../utils";
import { instanceKenzieKars, instanceMotorsShop } from "../services/api";
import axios from "axios";
import { IKar } from "../interfaces/adInterfaces";
import { UserContext } from "./userContext";
import { useNavigate } from "react-router-dom";

interface IAdProviderProps {
  ad: IAd | null;
  setAd: React.Dispatch<React.SetStateAction<IAd | null>>;
  getTimeSinceCommented: (date: string) => string;
  adImgModalOpen: boolean;
  setAdImgModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  imgUrl: string | null;
  setImgUrl: React.Dispatch<React.SetStateAction<string | null>>;
  adRegisterModal: boolean;
  setAdRegisterModal: React.Dispatch<React.SetStateAction<boolean>>;
  registerAdvertsement: (data) => void;
  karBrand: IKar[];
  setKarBrand: React.Dispatch<React.SetStateAction<IKar[]>>;
  getBrands: (data) => void;
  getKars: () => void;
  kars: {};
  editAdv: boolean;
  setEditAdv: React.Dispatch<React.SetStateAction<boolean>>;
  deleteAdv: boolean;
  setDeleteAdv: React.Dispatch<React.SetStateAction<boolean>>;
  apiResp: any;
  setApiResp: React.Dispatch<any>;
  getAllAds: () => void;
  updateAd: (id: string, data: any) => void;
  deleteAd: (id: string) => void;
  postCommentary: (id: string, data: string) => void;
  getOneAd: (id: string) => void;
}

export const AdContext = createContext<IAdProviderProps>(
  {} as IAdProviderProps
);

export const AdProvider = ({ children }) => {
  const [ad, setAd] = useState<IAd | null>(null);
  const [adImgModalOpen, setAdImgModalOpen] = useState(false);
  const [editAdv, setEditAdv] = useState(false);
  const [deleteAdv, setDeleteAdv] = useState(false);
  const [imgUrl, setImgUrl] = useState<string | null>(null);
  const [adRegisterModal, setAdRegisterModal] = useState(false);
  const [kars, setKars] = useState({});
  const [karBrand, setKarBrand] = useState<IKar[]>([]);
  const token = localStorage.getItem("@access_token");
  const [apiResp, setApiResp] = useState<any>([]);
  const { setCars, cars } = useContext(UserContext);

  const getTimeSinceCommented = (date: string): string => {
    const timeSinceCommented = moment(date).fromNow();
    return translateToPt(timeSinceCommented);
  };

  const navigate = useNavigate();
  const getKars = async () => {
    try {
      const resp = await instanceKenzieKars.get(`/cars`);
      setKars(resp.data);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.log(err.response?.data.message);
      }
    }
  };

  const getBrands = async (data: string) => {
    try {
      const resp = await instanceKenzieKars.get(`/cars?brand=${data}`);
      setKarBrand(resp.data);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.log(err.response?.data.message);
      }
    }
  };

  const registerAdvertsement = async (data) => {
    try {
      instanceMotorsShop.defaults.headers.authorization = `Token ${token}`;
      console.log(token);
      const resp = await instanceMotorsShop.post("/advertisement", data);
      setCars([...cars!, resp.data]);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.error(err.response?.data.message);
      }
    }
  };

  const getAllAds = async () => {
    try {
      const resp = await instanceMotorsShop.get("/advertisement");
      setApiResp(resp.data);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.error(err.response?.data.message);
      }
    }
  };

  const updateAd = async (id: string, data: any) => {
    try {
      instanceMotorsShop.defaults.headers.authorization = `Token ${token}`;
      const resp = await instanceMotorsShop.patch(`/advertisement/${id}`, data);
      const filterCars = cars?.filter((element) => element.id !== id);

      setCars([...filterCars!, resp.data]);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.error(err.response?.data.message);
      }
    }
  };

  const deleteAd = async (id: string) => {
    try {
      instanceMotorsShop.defaults.headers.authorization = `Token ${token}`;
      await instanceMotorsShop.delete(`/advertisement/${id}`);
      const filterCars = cars?.filter((element) => element.id !== id);
      setCars([...filterCars!]);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.error(err.response?.data.message);
      }
    }
  };

  const getOneAd = async (id: string) => {
    try {
      const ad = await instanceMotorsShop.get(`/advertisement/${id}`);
      setAd(ad.data);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.error(err.response?.data.message);
      }
    }
  };

  const postCommentary = async (id: string, data: string) => {
    try {
      instanceMotorsShop.defaults.headers.authorization = `Token ${token}`;
      const resp = await instanceMotorsShop.post(`/comments/${id}`, data);
      const filterCar = cars?.filter((element) => element.id == id);
      filterCar![0].comments = [...filterCar![0].comments, resp.data].sort(
        (a, b) => b.createdAt.localeCompare(a.createdAt)
      );
      setAd(filterCar![0]);
      navigate(`/advertisement/${id}`);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.error(err.response?.data.message);
      }
    }
  };

  return (
    <AdContext.Provider
      value={{
        ad,
        setAd,
        getTimeSinceCommented,
        adImgModalOpen,
        setAdImgModalOpen,
        imgUrl,
        setImgUrl,
        setAdRegisterModal,
        adRegisterModal,
        registerAdvertsement,
        karBrand,
        setKarBrand,
        getBrands,
        getKars,
        kars,
        editAdv,
        setEditAdv,
        deleteAdv,
        setDeleteAdv,
        setApiResp,
        apiResp,
        getAllAds,
        updateAd,
        deleteAd,
        postCommentary,
        getOneAd,
      }}
    >
      {children}
    </AdContext.Provider>
  );
};
