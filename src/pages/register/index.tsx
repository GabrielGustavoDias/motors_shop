import React, { useContext, useState } from "react";
import { ConfirmPassword, Footer, Header, PassWord } from "../../components";
import { yupResolver } from "@hookform/resolvers/yup";
import { IUser } from "../../interfaces/userInterfaces";
import { userRegisterSchema as schema } from "../../schemas";
import { UserContext } from "../../contexts";
import { useForm } from "react-hook-form";
import { StyledForm } from "../../styles/form";
import { StyledDiv, StyledMainRegister } from "../../styles";

export const Register = () => {
  const [isClicked, setIsClicked] = useState("vendedor");
  const { registerUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IUser>({ resolver: yupResolver(schema) });

  const data = (data) => {
    delete data.confirmPassword;

    const d = new Date(data.birth_date);
    let month = "" + (d.getMonth() + 1);
    let day = "" + d.getDate();
    let year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    data.birth_date = [year, month, day].join("/");

    registerUser(data);
  };

  return (
    <>
      <Header></Header>
      <StyledMainRegister>
        <StyledForm onSubmit={handleSubmit(data)}>
          <h1>Cadastro</h1>
          <p className="titleRegister">Informações Pessoais</p>
          <StyledDiv location="input">
            <input id="Nome" placeholder="Nome" {...register("name")}></input>
            <label htmlFor="name">Nome</label>
            <p>{errors.name?.message}</p>
          </StyledDiv>
          <StyledDiv location="input">
            <input
              id="email"
              placeholder="E-mail"
              {...register("email")}
            ></input>
            <label htmlFor="email">E-mail</label>
            <p>{errors.email?.message}</p>
          </StyledDiv>

          <StyledDiv location="input">
            <input id="cpf" placeholder="CPF" {...register("cpf")}></input>
            <label htmlFor="cpf">CPF</label>
            <p>{errors.cpf?.message}</p>
          </StyledDiv>

          <StyledDiv location="input">
            <input
              id="phone"
              placeholder="Phone"
              {...register("phone")}
            ></input>
            <label htmlFor="phone">Phone</label>
            <p>{errors.phone?.message}</p>
          </StyledDiv>

          <StyledDiv location="input">
            <input
              id="birth_date"
              placeholder="Birthday Date"
              {...register("birth_date")}
            ></input>
            <label htmlFor="birth_date">Birthday Date</label>
            <p>{errors.birth_date?.message}</p>
          </StyledDiv>

          <StyledDiv location="input">
            <input
              id="description"
              placeholder="description"
              {...register("description")}
            ></input>
            <label htmlFor="description">Description</label>
            <p>{errors.description?.message}</p>
          </StyledDiv>

          <StyledDiv location="input">
            <input
              id="profile_image"
              placeholder="Avatar Image"
              {...register("profile_image")}
            ></input>
            <label htmlFor="profile_image">Avatar Image</label>
            <p>{errors.profile_image?.message}</p>
          </StyledDiv>

          <p className="titleRegister">Informações de Endereço</p>
          <div>
            <StyledDiv location="input">
              <input
                id="cep"
                placeholder="Cep"
                {...register("address.cep")}
              ></input>
              <label htmlFor="cep">Cep</label>
              <p>{errors.address?.cep?.message}</p>
            </StyledDiv>
            <div className="innerAddress">
              <StyledDiv location="input">
                <input
                  id="city"
                  placeholder="City"
                  {...register("address.city")}
                ></input>
                <label htmlFor="city">City</label>
                <p>{errors.address?.city?.message}</p>
              </StyledDiv>
              <StyledDiv location="input">
                <input
                  id="state"
                  placeholder="State"
                  {...register("address.state")}
                ></input>
                <label htmlFor="state">State</label>
                <p>{errors.address?.state?.message}</p>
              </StyledDiv>
            </div>
            <StyledDiv location="input">
              <input
                id="street"
                placeholder="Street"
                {...register("address.street")}
              ></input>
              <label htmlFor="street">Street</label>
              <p>{errors.address?.street?.message}</p>
            </StyledDiv>
            <div className="innerAddress">
              <StyledDiv location="input">
                <input
                  id="number"
                  placeholder="Number"
                  {...register("address.number")}
                ></input>
                <label htmlFor="number">Number</label>
                <p>{errors.address?.number?.message}</p>
              </StyledDiv>
              <StyledDiv location="input">
                <input
                  id="additional_info"
                  placeholder="Ex: apart 307"
                  {...register("address.additional_info")}
                ></input>
                <label htmlFor="additional_info">Complement</label>
                <p>{errors.address?.additional_info?.message}</p>
              </StyledDiv>
            </div>
          </div>

          <p className="titleRegister">Tipo de Conta</p>
          <div className="inputButton">
            <input
              id="seller"
              className={isClicked == "vendedor" ? "active" : "inputBtn"}
              type="button"
              value="Vendedor"
              defaultChecked
              {...register("account_type")}
              onClick={() => setIsClicked("vendedor")}
            />
            <input
              id="buyer"
              className={isClicked == "comprador" ? "active" : "inputBtn"}
              type="button"
              value="Comprador"
              onClick={() => {
                setIsClicked("comprador");
                setValue("account_type", "Comprador", {
                  shouldValidate: true,
                });
              }}
            />

            <p>{errors.account_type?.message}</p>
          </div>

          <PassWord register={register} errors={errors} />
          <ConfirmPassword register={register} errors={errors} />

          <button type="submit" className="submit">
            Finalizar Cadastro
          </button>
        </StyledForm>
      </StyledMainRegister>
      <Footer />
    </>
  );
};
