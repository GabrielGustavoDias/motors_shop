import React, { createContext, useState } from "react";
import { ICar } from "../interfaces/carsInterface";
import { instanceMotorsShop } from "../services/api";
import { useNavigate } from "react-router-dom";
import { ILoginUser, IUserResponse } from "../interfaces/userInterfaces";
import { toast } from "react-toastify";

interface IUserProviderProps {
  user: IUserResponse | null;
  setUser: React.Dispatch<React.SetStateAction<IUserResponse | null>>;
  cars: ICar[] | null;
  setCars: React.Dispatch<React.SetStateAction<ICar[] | null>>;
  login: (data: ILoginUser) => Promise<void>;
  logout: () => void;
  getInitials: (name: string) => string;
  registerUser: (data) => Promise<void>;
  deletedUser: () => Promise<void>;
  listAdvertisement: () => Promise<void>;
  getUserProfile: () => void;
  updateUser: (data: any, id: string) => void;
  sendEmail: (data: string) => Promise<void>;
  resetPassword: (password: string, resetToken: string) => Promise<void>;
  updateAddress: (data: any, id: string) => Promise<void>;
  editAdd: boolean;
  setEditAdd: React.Dispatch<React.SetStateAction<boolean>>;
  editUser: boolean;
  setEditUser: React.Dispatch<React.SetStateAction<boolean>>;
  deleteUser: boolean;
  setDeleteUser: React.Dispatch<React.SetStateAction<boolean>>;
  getUser: (id: string) => Promise<void>;
  setSellerUser: React.Dispatch<React.SetStateAction<IUserResponse | null>>;
  sellerUser: IUserResponse | null;
}

export const UserContext = createContext<IUserProviderProps>(
  {} as IUserProviderProps
);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState<IUserResponse | null>(null);
  const [sellerUser, setSellerUser] = useState<IUserResponse | null>(null);
  const [editAdd, setEditAdd] = useState(false);
  const [editUser, setEditUser] = useState(false);
  const [deleteUser, setDeleteUser] = useState(false);
  const [cars, setCars] = useState<any>([]);
  const token = localStorage.getItem("@access_token");

  const navigate = useNavigate();

  const logout = (): void => {
    setUser(null);
    localStorage.removeItem("@access_token");
    toast.error("Please login again");
  };

  const login = async (data: ILoginUser) => {
    try {
      const response = await instanceMotorsShop.post("/login", data);
      const { token } = response.data;
      localStorage.setItem("@access_token", token);
      navigate("/profile");
    } catch (error) {
      toast.error("Verify the given informations and try again!");
      localStorage.clear();
    }
  };

  const getInitials = (name: string): string => {
    let firstName = name.split(" ")[0];
    let surname = name.split(" ")[1];

    if (surname) {
      return firstName[0] + surname[0];
    }

    return firstName[0];
  };

  const registerUser = async (data) => {
    try {
      await instanceMotorsShop.post("/users", data);
      navigate("/login");
      toast.success("Registration done successfully ");
    } catch (error) {
      toast.error("Entered data already registered");
    }
  };

  const deletedUser = async () => {
    try {
      instanceMotorsShop.defaults.headers.authorization = `Token ${token}`;
      await instanceMotorsShop.delete(`/users/${user!.id}`);
      localStorage.removeItem("@access_token");
      setUser(null);
      navigate("/");
      toast.success("Your account has been deleted");
    } catch (error) {
      console.error(error);
      toast.error("Error please try again later");
    }
  };

  const getUserProfile = async () => {
    try {
      instanceMotorsShop.defaults.headers.authorization = `Token ${token}`;
      const findUser = await instanceMotorsShop.get("/users");
      setUser(findUser.data);
      setCars(findUser.data.advertisement);
    } catch (error) {
      console.error(error);
    }
  };

  const getUser = async (id: string) => {
    try {
      const findUser = await instanceMotorsShop.get(`/users/${id}`);
      setSellerUser(findUser.data);
      setCars(findUser.data.advertisement);
    } catch (error) {
      console.error(error);
    }
  };
  const updateUser = async (id: string, data: any) => {
    try {
      instanceMotorsShop.defaults.headers.authorization = `Token ${token}`;
      const response = await instanceMotorsShop.patch(`/users/${id}`, data);
      const user = response.data;
      setUser(user);
      setCars(user.advertisement);
    } catch (error) {
      console.error(error);
    }
  };

  const sendEmail = async (email: string) => {
    try {
      await instanceMotorsShop.post("/users/resetPassword", { email });
      toast.success("Check your email");
    } catch (error) {
      toast.error("Please insert a valid email");
    }
  };

  const resetPassword = async (password: string, resetToken: string) => {
    try {
      await instanceMotorsShop.patch(`/users/resetPassword/${resetToken}`, {
        password,
      });
      toast.success("Password changed successfully");
      navigate("/login");
    } catch (error) {
      toast.error("Please try again later");
    }
  };

  const updateAddress = async (data: any, id: string) => {
    try {
      instanceMotorsShop.defaults.headers.authorization = `Token ${token}`;
      const resp = await instanceMotorsShop.patch(`/address/${id}`, data);
      setUser(resp.data);
    } catch (error) {
      console.error(error);
    }
  };

  const listAdvertisement = async () => {
    const response = await instanceMotorsShop.get(`/advertisement`);
    const adList = response.data;
    setCars(adList);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        login,
        logout,
        getInitials,
        registerUser,
        deletedUser,
        getUserProfile,
        updateUser,
        sendEmail,
        resetPassword,
        updateAddress,
        cars,
        setCars,
        listAdvertisement,
        editAdd,
        setEditAdd,
        editUser,
        setEditUser,
        deleteUser,
        setDeleteUser,
        getUser,
        sellerUser,
        setSellerUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
