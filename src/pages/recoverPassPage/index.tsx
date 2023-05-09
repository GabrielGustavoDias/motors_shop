import React, { useContext, useEffect } from "react";
import { ConfirmPassword, Footer, Header, PassWord } from "../../components";
import { yupResolver } from "@hookform/resolvers/yup";
import { recoverPassSchema as schema } from "../../schemas";
import { UserContext } from "../../contexts";
import { useForm } from "react-hook-form";
import { StyledForm } from "../../styles/form";
import { StyledMainLogin } from "../../styles";
import { useParams } from "react-router-dom";

export const RecoverPass = () => {
  const { resetPassword } = useContext(UserContext);
  let { resetToken } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const data = (data) => {
    resetPassword(data.password, resetToken!);
  };

  return (
    <>
      <Header></Header>
      <StyledMainLogin>
        <StyledForm onSubmit={handleSubmit(data)}>
          <h1>Recuperação de senha</h1>
          <PassWord register={register} errors={errors} />
          <ConfirmPassword register={register} errors={errors} />
          <button type="submit" className="submit">
            Enviar
          </button>
        </StyledForm>
      </StyledMainLogin>
      <Footer />
    </>
  );
};
