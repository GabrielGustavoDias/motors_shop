import React, { useContext, useState } from "react";
import {
  Footer,
  Header,
  ModalDeleteConfirmUser,
  PassWord,
} from "../../components";
import { yupResolver } from "@hookform/resolvers/yup";
import { ILoginUser } from "../../interfaces/userInterfaces";
import { userLoginSchema as schema } from "../../schemas";
import { AdContext, UserContext } from "../../contexts";
import { useForm } from "react-hook-form";
import { StyledForm } from "../../styles/form";
import { StyledDiv, StyledMainLogin } from "../../styles";
import { Link } from "react-router-dom";

export const Login = () => {
  const { login, sendEmail } = useContext(UserContext);
  const {} = useContext(AdContext);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<ILoginUser>({ resolver: yupResolver(schema) });

  const handleForgotPassword = (data) => {
    const email = data.email;

    sendEmail(email);
  };

  const data = (data) => {
    login(data);
  };

  return (
    <>
      <Header></Header>
      <StyledMainLogin>
        <StyledForm onSubmit={handleSubmit(data)}>
          <h1>Login</h1>
          <StyledDiv location="input">
            <input
              id="email"
              placeholder="Usuário"
              {...register("email")}
            ></input>
            <label htmlFor="email">Usuário</label>
            <p>{errors.email?.message}</p>
          </StyledDiv>

          <PassWord register={register} errors={errors} />

          <p
            className="forgotPass"
            onClick={() => {
              const values = getValues();
              handleForgotPassword(values);
            }}
          >
            Esqueceu a senha
          </p>
          <button type="submit" className="submit">
            Entrar
          </button>
          <p className="registerText">Ainda não tem conta?</p>
          <Link to="/register" className="register">
            Cadastrar
          </Link>
        </StyledForm>
      </StyledMainLogin>
      <Footer />
    </>
  );
};
