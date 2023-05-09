import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AdContext } from "../contexts/adContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { useFieldArray, useForm } from "react-hook-form";
import { IAd, IAddress, IEditUser } from "../interfaces";
import {
  AdvertsementEditSchema,
  AdvertsementSchema,
  userEditSchema,
} from "../schemas";
import {
  ContainerModal,
  ModalContent,
  ModalContentEditAdv,
  ModalContentRegAd,
  ModalDeleteConfirmUsercontent,
  ModalEditAddressContent,
  ModalEditUserContent,
  StyledDiv,
  StyledSelect,
  StyledForm,
} from "../styles";

import { Option } from "./option";
import { IKar } from "../interfaces/adInterfaces";
import { UserContext } from "../contexts";
import { addressEditSchema, addressSchema } from "../schemas/adddressSchema";
import { PassWord } from "./inputPassword/password";
import { ConfirmPassword } from "./inputPassword/confirmPassword";

export const ModalAd = () => {
  const { setAdImgModalOpen, setImgUrl, imgUrl } = useContext(AdContext);

  return (
    <ContainerModal
      onClick={() => {
        setAdImgModalOpen(false);
        setImgUrl(null);
      }}
    >
      <ModalContent onClick={(event) => event.stopPropagation()}>
        <div className="modal__header">
          <h2>Imagem do veículo</h2>
          <button
            onClick={() => {
              setAdImgModalOpen(false);
              setImgUrl(null);
            }}
          >
            X
          </button>
        </div>
        {imgUrl && <img src={imgUrl} alt="Imagem do veículo" />}
      </ModalContent>
    </ContainerModal>
  );
};

export const ModalRegisterAdvertsement = () => {
  const {
    setAdRegisterModal,
    adRegisterModal,
    karBrand,
    setKarBrand,
    getBrands,
    getKars,
    kars,
    registerAdvertsement,
  } = useContext(AdContext);
  const [carModel, setCarModel] = useState("");
  const [isClicked, setIsClicked] = useState("Não");
  const [inputField, setInputField] = useState([
    { id: 0, text: "Imagem de Capa", placeholder: "https://image.com" },
  ]);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm<IAd>({ resolver: yupResolver(AdvertsementSchema) });
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control,
      name: "images",
    }
  );

  useEffect(() => {
    getKars();
  }, []);

  const carBrands = Object.keys(kars);
  const carModels: string[] = [];
  karBrand.forEach((element) => carModels.push(element.name));
  const targetCar = karBrand.filter((element) => element.name == carModel);

  if (targetCar[0]) {
    setValue("year", targetCar[0].year);
    setValue("fuel_type", targetCar[0].fuel);
    setValue("fipe", targetCar[0].value);
  }

  const verifyData = (data) => {
    const image_array: {}[] = [];

    data.images.forEach((element) => {
      const newObj = {
        link: element.value,
      };
      image_array.push(newObj);
    });
    data.images = image_array;
    registerAdvertsement(data);
  };

  const moreInputFields = () => {
    const count = inputField.length == 1 ? 1 : inputField.length;

    setInputField([
      ...inputField,
      {
        id: count,
        text: `${count}° Imagem da galeria`,
        placeholder: "https://image.com",
      },
    ]);
  };

  return (
    <ContainerModal
      onClick={() => {
        setAdRegisterModal(false);
      }}
    >
      <ModalContentRegAd onClick={(event) => event.stopPropagation()}>
        <h2>Criar Anúncio</h2>
        <StyledForm onSubmit={handleSubmit(verifyData)}>
          <p>Informações do veículo</p>
          <p>Marca</p>
          <StyledSelect
            id="name"
            {...register("name")}
            onChange={(event: any) => getBrands(event.target.value)}
          >
            <option value="">Escolha a marca</option>
            {carBrands.map((element, key) => (
              <Option key={key} data={element} />
            ))}
          </StyledSelect>
          <p>Modelo</p>
          <StyledSelect
            disabled={karBrand.length == 0 ? true : false}
            {...register("model")}
            onChange={(event) => {
              setCarModel(event.target.value);
            }}
          >
            <option value="">Escolha o Modelo</option>
            {carModels.map((element, key) => (
              <Option key={key} data={element} />
            ))}
          </StyledSelect>
          <div>
            <StyledDiv location="input">
              <input
                id="year"
                value={!targetCar[0] ? "" : targetCar[0].year}
                placeholder="Ano"
                {...(register("year"), { disabled: true })}
              ></input>
              <label htmlFor="year">Year</label>
              <p>{errors.year?.message}</p>
            </StyledDiv>
            <StyledDiv location="input">
              <input
                id="fuel_type"
                placeholder="Tipo de Combustivel"
                {...(register("fuel_type"), { disabled: true })}
                value={!targetCar[0] ? "" : targetCar[0].fuel}
              ></input>
              <label htmlFor="fuel_type">Combústivel</label>
              <p>{errors.fuel_type?.message}</p>
            </StyledDiv>
          </div>

          <div>
            <StyledDiv location="input">
              <input
                id="km"
                placeholder="Quilometragem"
                {...register("km")}
              ></input>
              <label htmlFor="km">Quilometragem</label>
              <p>{errors.km?.message}</p>
            </StyledDiv>
            <StyledDiv location="input">
              <input
                id="color"
                placeholder="Color"
                {...register("color")}
              ></input>
              <label htmlFor="color">Color</label>
              <p>{errors.color?.message}</p>
            </StyledDiv>
          </div>

          <div>
            <StyledDiv location="input">
              <input
                id="fipe"
                value={!targetCar[0] ? "" : targetCar[0].value}
                placeholder="fipe"
                {...(register("fipe"), { disabled: true })}
              ></input>
              <label htmlFor="fipe">Preço tabela Fipe</label>
              <p>{errors.fipe?.message}</p>
            </StyledDiv>
            <StyledDiv location="input">
              <input
                id="price"
                placeholder="Preço"
                {...register("price")}
              ></input>
              <label htmlFor="price">Preço</label>
              <p>{errors.price?.message}</p>
            </StyledDiv>
          </div>
          <p>Descrição</p>
          <textarea {...register("description")}></textarea>
          <p>{errors.description?.message}</p>

          <div>
            <p>Publicado</p>
            <div className="inputButton">
              <input
                id="buyer"
                className={isClicked == "Sim" ? "active" : "inputBtn"}
                type="button"
                value="Sim"
                onClick={() => {
                  setIsClicked("Sim");
                  setValue("ad_status", "Sim", {
                    shouldValidate: true,
                  });
                }}
              />
              <input
                id="seller"
                className={isClicked == "Não" ? "active" : "inputBtn"}
                type="button"
                value="Não"
                defaultChecked
                {...register("ad_status")}
                onClick={() => setIsClicked("Não")}
              />
            </div>
            <p>{errors.ad_status?.message}</p>
          </div>
          {inputField.map((element, index) => {
            return (
              <StyledDiv key={index} location="input">
                <input
                  key={element.id}
                  id={element.text}
                  placeholder={element.placeholder}
                  {...register(`images.${index}.value` as const)}
                ></input>
                <label htmlFor={element.text}>{element.text}</label>
              </StyledDiv>
            );
          })}

          <button
            className="addInput"
            type="button"
            onClick={() => moreInputFields()}
          >
            Adicionar campo para imagem da galeria
          </button>
          <div className="btnConfirmCancel">
            <button
              onClick={() => {
                setAdRegisterModal(false);
              }}
              className="cancel"
            >
              Cancelar
            </button>
            <button className="confirm" type="submit">
              Criar Anuncio
            </button>
          </div>
        </StyledForm>
      </ModalContentRegAd>
    </ContainerModal>
  );
};

export const ModalEditAddress = () => {
  const { setEditAdd, user, updateAddress } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAddress>({
    resolver: yupResolver(addressEditSchema),
    defaultValues: {
      cep: user?.address?.cep,
      city: user?.address?.city,
      state: user?.address?.state,
      number: user?.address?.number,
      street: user?.address?.street,
      additional_info: user?.address?.additional_info,
    },
  });

  const verifyData = (data) => {
    for (let element in data) {
      if (
        data[element] === "" ||
        data[element] === (user!.address as any)[`${element}`]
      ) {
        delete data[element];
      }
    }
    updateAddress(data, user?.address?.id!);
  };

  return (
    <ContainerModal onClick={() => setEditAdd(false)}>
      <ModalEditAddressContent onClick={(event) => event.stopPropagation()}>
        <h2>Editar Endereço</h2>
        <StyledForm onSubmit={handleSubmit(verifyData)}>
          <p>Informações de Endereço</p>

          <StyledDiv location="input">
            <input id="cep" placeholder="Cep" {...register("cep")}></input>
            <label htmlFor="cep">Cep</label>
            <p>{errors.cep?.message}</p>
          </StyledDiv>
          <div className="innerAddress">
            <StyledDiv location="input">
              <input id="city" placeholder="City" {...register("city")}></input>
              <label htmlFor="city">City</label>
              <p>{errors.city?.message}</p>
            </StyledDiv>
            <StyledDiv location="input">
              <input
                id="state"
                placeholder="State"
                {...register("state")}
              ></input>
              <label htmlFor="state">State</label>
              <p>{errors.state?.message}</p>
            </StyledDiv>
          </div>
          <StyledDiv location="input">
            <input
              id="street"
              placeholder="Street"
              {...register("street")}
            ></input>
            <label htmlFor="street">Street</label>
            <p>{errors.street?.message}</p>
          </StyledDiv>
          <div className="innerAddress">
            <StyledDiv location="input">
              <input
                id="number"
                placeholder="Number"
                {...register("number")}
              ></input>
              <label htmlFor="number">Number</label>
              <p>{errors.number?.message}</p>
            </StyledDiv>
            <StyledDiv location="input">
              <input
                id="additional_info"
                placeholder="Ex: apart 307"
                {...register("additional_info")}
              ></input>
              <label htmlFor="additional_info">Complement</label>
              <p>{errors.additional_info?.message}</p>
            </StyledDiv>
          </div>

          <div className="buttonsDiv">
            <button
              type="button"
              className="edit"
              onClick={() => setEditAdd(false)}
            >
              Cancelar
            </button>
            <button type="submit" className="submit">
              Salvar Alterações
            </button>
          </div>
        </StyledForm>
      </ModalEditAddressContent>
    </ContainerModal>
  );
};

export const ModalEditUser = () => {
  const { setEditUser, setDeleteUser, user, updateUser } =
    useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IEditUser>({
    resolver: yupResolver(userEditSchema),
    defaultValues: {
      name: user?.name,
      birth_date: user?.birth_date,
      cpf: user?.cpf,
      email: user?.email,
      phone: user?.phone,
      description: user?.description,
    },
  });

  const verifyData = (data) => {
    delete data.confirmPassword;

    const d = new Date(data.birth_date);
    let month = "" + (d.getMonth() + 1);
    let day = "" + d.getDate();
    let year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    data.birth_date = [year, month, day].join("-");

    for (let element in data) {
      if (
        data[element] === "" ||
        data[element] === (user! as any)[`${element}`]
      ) {
        delete data[element];
      }
    }

    updateUser(user!.id, data);
  };
  return (
    <ContainerModal onClick={() => setEditUser(false)}>
      <ModalEditUserContent onClick={(event) => event.stopPropagation()}>
        <StyledForm onSubmit={handleSubmit(verifyData)}>
          <h1>Editar Perfil</h1>
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
          <PassWord register={register} errors={errors} />
          <ConfirmPassword register={register} errors={errors} />
          <div className="buttonsDiv">
            <button
              className="cancel"
              type="button"
              onClick={() => setEditUser(false)}
            >
              Cancelar
            </button>
            <button
              className="exclude"
              type="button"
              onClick={() => {
                setEditUser(false);
                setDeleteUser(true);
              }}
            >
              Excluir Perfil
            </button>
            <button className="submit" type="submit">
              Salvar Alterações
            </button>
          </div>
        </StyledForm>
      </ModalEditUserContent>
    </ContainerModal>
  );
};

export const ModalDeleteConfirmUser = () => {
  const { setDeleteUser, deletedUser } = useContext(UserContext);

  const deleteAcc = () => {
    deletedUser();
  };
  return (
    <ContainerModal onClick={() => setDeleteUser(false)}>
      <ModalDeleteConfirmUsercontent
        onClick={(event) => event.stopPropagation()}
      >
        <h1>Confirmação</h1>
        <p>
          Você está prestes a deletar a sua conta, você realmente deseja deletar
          a sua conta?
        </p>
        <button className="confirm" onClick={() => deleteAcc()}>
          Sim, Delete a minha conta!
        </button>
        <button className="cancel" onClick={() => setDeleteUser(false)}>
          Não, Me tire daqui!
        </button>
      </ModalDeleteConfirmUsercontent>
    </ContainerModal>
  );
};

export const ModalEditAdv = ({ car, setEditAdv, setDeleteAdv }) => {
  const [carModel, setCarModel] = useState("");
  const [isClicked, setIsClicked] = useState(car.ad_status);
  const [inputField, setInputField] = useState([
    { id: 0, text: "Imagem de Capa", placeholder: "https://image.com" },
  ]);

  const { updateAd } = useContext(AdContext);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm<IAd>({
    resolver: yupResolver(AdvertsementEditSchema),
    defaultValues: {
      km: car.km,
      color: car.color,
      price: car.price,
      description: car.description,
      ad_status: car.ad_status,
    },
  });
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control,
      name: "images",
    }
  );

  const verifyData = (data: IAd) => {
    const image_array: string[] = [];

    data.images.forEach((element) => {
      image_array.push(element.value);
    });
    data.images = image_array;
    for (let element in data) {
      if (
        data[element] === "" ||
        data[element] === (car! as any)[`${element}`] ||
        element === "images"
      ) {
        delete data[element];
      }
    }

    updateAd(car.id, data);
  };

  const moreInputFields = () => {
    const count = inputField.length == 1 ? 1 : inputField.length;

    setInputField([
      ...inputField,
      {
        id: count,
        text: `${count}° Imagem da galeria`,
        placeholder: "https://image.com",
      },
    ]);
  };

  return (
    <ContainerModal
      onClick={() => {
        setEditAdv(false);
      }}
    >
      <ModalContentEditAdv onClick={(event) => event.stopPropagation()}>
        <h2>Editar Anúncio</h2>
        <StyledForm onSubmit={handleSubmit(verifyData)}>
          <p>Informações do veículo</p>
          <StyledDiv location="input">
            <input
              id="name"
              value={car.name}
              placeholder="Marca"
              {...(register("name"), { disabled: true })}
            ></input>
            <label htmlFor="year">Marca</label>
            <p>{errors.name?.message}</p>
          </StyledDiv>
          <StyledDiv location="input">
            <input
              id="model"
              value={car.model}
              placeholder="Modelo"
              {...(register("model"), { disabled: true })}
            ></input>
            <label htmlFor="model">Modelo</label>
            <p>{errors.name?.message}</p>
          </StyledDiv>
          <div>
            <StyledDiv location="input">
              <input
                id="year"
                value={car.year}
                placeholder="Ano"
                {...(register("year"), { disabled: true })}
              ></input>
              <label htmlFor="year">Year</label>
              <p>{errors.year?.message}</p>
            </StyledDiv>
            <StyledDiv location="input">
              <input
                id="fuel_type"
                placeholder="Tipo de Combustivel"
                {...(register("fuel_type"), { disabled: true })}
                value={
                  car.fuel_type === 1
                    ? "Flex"
                    : car.fuel_type === 2
                    ? "Gasolina"
                    : car.fuel_type === 3
                    ? "Elétrico"
                    : ""
                }
              ></input>
              <label htmlFor="fuel_type">Combústivel</label>
              <p>{errors.fuel_type?.message}</p>
            </StyledDiv>
          </div>

          <div>
            <StyledDiv location="input">
              <input
                id="km"
                placeholder="Quilometragem"
                {...register("km")}
              ></input>
              <label htmlFor="km">Quilometragem</label>
              <p>{errors.km?.message}</p>
            </StyledDiv>
            <StyledDiv location="input">
              <input
                id="color"
                placeholder="Color"
                {...register("color")}
              ></input>
              <label htmlFor="color">Color</label>
              <p>{errors.color?.message}</p>
            </StyledDiv>
          </div>

          <div>
            <StyledDiv location="input">
              <input
                id="fipe"
                value={car.fipe}
                placeholder="fipe"
                {...(register("fipe"), { disabled: true })}
              ></input>
              <label htmlFor="fipe">Preço tabela Fipe</label>
              <p>{errors.fipe?.message}</p>
            </StyledDiv>
            <StyledDiv location="input">
              <input
                id="price"
                placeholder="Preço"
                {...register("price")}
              ></input>
              <label htmlFor="price">Preço</label>
              <p>{errors.price?.message}</p>
            </StyledDiv>
          </div>
          <p>Descrição</p>
          <textarea {...register("description")}></textarea>
          <p>{errors.description?.message}</p>

          <div>
            <p>Publicado</p>
            <div className="inputButton">
              <input
                id="buyer"
                className={isClicked == "Sim" ? "active" : "inputBtn"}
                type="button"
                value="Sim"
                onClick={() => {
                  setIsClicked("Sim");
                  setValue("ad_status", "Sim", {
                    shouldValidate: true,
                  });
                }}
              />
              <input
                id="seller"
                className={isClicked == "Não" ? "active" : "inputBtn"}
                type="button"
                value="Não"
                defaultChecked
                {...register("ad_status")}
                onClick={() => setIsClicked("Não")}
              />
            </div>
            <p>{errors.ad_status?.message}</p>
          </div>
          {inputField.map((element, index) => {
            return (
              <StyledDiv key={index} location="input">
                <input
                  key={element.id}
                  id={element.text}
                  placeholder={element.placeholder}
                  {...register(`images.${index}.value` as const)}
                ></input>
                <label htmlFor={element.text}>{element.text}</label>
              </StyledDiv>
            );
          })}

          <button
            className="addInput"
            type="button"
            onClick={() => moreInputFields()}
          >
            Adicionar campo para imagem da galeria
          </button>
          <div className="btnConfirmCancel">
            <button
              onClick={() => {
                setEditAdv(false);
                setDeleteAdv(true);
              }}
              className="cancel"
            >
              Deletar Anúncio
            </button>
            <button className="confirm" type="submit">
              Salvar Alterações
            </button>
          </div>
        </StyledForm>
      </ModalContentEditAdv>
    </ContainerModal>
  );
};

export const ModalDeleteConfirmAdv = ({ setDeleteAdv, id }) => {
  const { deleteAd } = useContext(AdContext);
  const deleteAdv = (id: string) => {
    deleteAd(id);
  };
  return (
    <ContainerModal onClick={() => setDeleteAdv(false)}>
      <ModalDeleteConfirmUsercontent
        onClick={(event) => event.stopPropagation()}
      >
        <h1>Confirmação</h1>
        <p>Você está para deletar esse anúncio, quer realmente continuar?</p>
        <button
          className="confirm"
          onClick={() => {
            deleteAdv(id);
            setDeleteAdv(false);
          }}
        >
          Sim, Delete o meu anúncio!
        </button>
        <button className="cancel" onClick={() => setDeleteAdv(false)}>
          Não, Me tire daqui!
        </button>
      </ModalDeleteConfirmUsercontent>
    </ContainerModal>
  );
};
