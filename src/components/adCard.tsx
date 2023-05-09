import React, { useContext, useState } from "react";
import { CarWrapper, UserInitials, CarTags, CardsContainer } from "../styles";
import { AdContext, UserContext } from "../contexts";
import { ModalEditAdv, ModalDeleteConfirmAdv } from "./modals";
import { Navigate, useNavigate } from "react-router-dom";
export const AdvertisementCard = ({ car }) => {
  const { user, getInitials } = useContext(UserContext);
  const { setAd } = useContext(AdContext);

  const [editAdv, setEditAdv] = useState(false);
  const [deleteAdv, setDeleteAdv] = useState(false);
  const navigate = useNavigate();

  return (
    <CardsContainer>
      <CarWrapper>
        {car.ad_status === "Sim" ? (
          <span className="active car-status">Ativo</span>
        ) : (
          <span className=" inactive car-status">Inativo</span>
        )}
        <div className="card-image">
          <img src={car.images}></img>
        </div>
        <div
          className="card-text"
          onClick={() => {
            setAd(car);
            navigate(`/advertisement/${car.id}`);
          }}
        >
          <h2>
            {car.name} - {car.model}
          </h2>
          <p>{car.description}</p>
          <div className="user-initials">
            <UserInitials>{getInitials(car.user.name)}</UserInitials>{" "}
            <p>{car.user.name}</p>
          </div>
        </div>
        <div className="card-bottom">
          <CarTags>{car.km} KM</CarTags>
          <CarTags>{car.year}</CarTags>
          <p>R$ {car.price}</p>
        </div>
        {(user ? user.id : false) === car.user.id && (
          <div className="div-btn">
            <button
              className="btn-edit-detail"
              onClick={() => setEditAdv(true)}
            >
              Editar
            </button>
            <button
              className="btn-edit-detail"
              onClick={() => {
                setAd(car);
                navigate(`/advertisement/${car.id}`);
              }}
            >
              Ver Detalhes
            </button>
          </div>
        )}
      </CarWrapper>
      {editAdv && (
        <ModalEditAdv
          car={car}
          setEditAdv={setEditAdv}
          setDeleteAdv={setDeleteAdv}
        />
      )}
      {deleteAdv && (
        <ModalDeleteConfirmAdv setDeleteAdv={setDeleteAdv} id={car.id} />
      )}
    </CardsContainer>
  );
};
