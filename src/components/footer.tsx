import React from "react";
import { StyledFooter } from "../styles";
import LogoWhite from "../assets/logo-white.svg";

export const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer-container">
        <img src={LogoWhite} alt="Logo Motors Shop" />
        <p>© 2023 - Todos os direitos reservados.</p>
        <a href="#">^</a>
      </div>
    </StyledFooter>
  );
};
