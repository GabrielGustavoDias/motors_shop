import React, { useContext } from "react";
import { useState } from "react";
import { StyledHeader } from "../styles";
import Logo from "../assets/logo.svg";
import { UserContext } from "../contexts";
import { useLocation } from "react-router-dom";
import {
  ModalDeleteConfirmUser,
  ModalEditAddress,
  ModalEditUser,
} from "./modals";

export const Header = () => {
  const {
    user,
    getInitials,
    logout,
    editUser,
    deleteUser,
    setEditUser,
    setDeleteUser,
    editAdd,
    setEditAdd,
  } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <StyledHeader>
        <div className="header-container">
          <a href="/">
            <img src={Logo} alt="Logo Motors Shop" />
          </a>
          {user ? (
            <nav id="nav" className={open ? "active" : undefined}>
              <div onClick={handleClick} className="menu-container">
                <div className="menu-icon">{getInitials(user.name)}</div>
                <a href="#" className="menu-name">
                  {user.name}
                </a>
              </div>
              <ul id="menu-auth" role="menu">
                <li>
                  <a href="/profile">Visualizar Perfil</a>
                </li>
                <li
                  onClick={() => {
                    setEditUser(true);
                    setOpen(false);
                  }}
                >
                  Editar Perfil
                </li>
                <li
                  onClick={() => {
                    setEditAdd(true);
                    setOpen(false);
                  }}
                >
                  Editar Endereço
                </li>
                {/* {user.account_type === "Vendedor" && (
                  <li>
                    <a href="/">Meus Anúncios</a>
                  </li>
                )} */}
                <li>
                  <a href="/" onClick={() => logout()}>
                    Sair
                  </a>
                </li>
              </ul>
            </nav>
          ) : (
            <nav id="nav" className={open ? "active" : undefined}>
              <button
                aria-label="Abrir menu"
                id="btn-mobile"
                type="button"
                onClick={() => handleClick()}
              >
                <span id="hamburguer"></span>
              </button>
              <ul id="menu" role="menu">
                <li>
                  <a
                    href="/login"
                    className={
                      location.pathname == "/login" ? "onFocus" : undefined
                    }
                  >
                    Fazer Login
                  </a>
                </li>
                <li>
                  <a
                    href="/register"
                    className={
                      location.pathname == "/register" ? "onFocus" : undefined
                    }
                  >
                    Cadastrar
                  </a>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </StyledHeader>
      {editUser && <ModalEditUser />}
      {deleteUser && <ModalDeleteConfirmUser />}
      {editAdd && <ModalEditAddress />}
    </>
  );
};
