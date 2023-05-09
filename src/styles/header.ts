import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  background-color: var(--grey-10);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

  .header-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
    max-width: 1200px;
    align-items: center;
    padding: 12px 0px;
  }

  li{
    cursor: pointer;
  }

  /* non authenticathed menu */

  #menu {
    display: flex;
    list-style: none;
    gap: 0.5rem;
  }

  #menu a {
    display: block;
    padding: 0.5rem;
    color: var(--grey-2);
    text-decoration: none;
    font-weight: var(--wheight-3);
    width: 120px;
    text-align: center;
    font-family: "Inter", sans-serif;
  }

  #menu li:last-child a {
    color: var(--grey-0);
    border: 2px solid var(--grey-6);
    border-radius: 4px;
  }

  #btn-mobile {
    display: none;
  }

  /* authenticated menu */

  .menu-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 17px;
    font-family: "Inter", sans-serif;
    font-size: var(--heading-7);
  }

  .menu-icon {
    background-color: var(
      ${"--ramdom-" + (Math.floor(Math.random() * 12) + 1)}
    );
    height: 37px;
    width: 37px;
    border-radius: 100%;
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
  }

  .menu-name {
    text-decoration: none;
    color: var(--grey-2);
  }

  #menu-auth {
    display: block;
    position: absolute;
    background-color: var(--grey-9);
    height: 0;
    z-index: 1000;
    visibility: hidden;
    overflow-y: hidden;
    font-family: "Inter", sans-serif;
  }

  #menu-auth li {
    list-style: none;
    padding: 10px 0;
    margin: 10px 5px;
  }

  #menu-auth a {
    text-decoration: none;
    color: var(--grey-2);
  }

  #nav {
    border-left: 1px solid var(--grey-6);
  }

  #nav.active #menu-auth {
    margin: 0 5px 0 0;
    width: 150px;
    top: 47px;
    right: 0px;
    height: max-content;
    visibility: visible;
    transition: 0.6s;
    overflow-y: auto;
    padding: 0px 15px;
    border-radius: 4px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }

  #menu .onFocus,
  #menu button .onFocus {
    color: var(--brand-2);
    font-weight: 700;
  }

  @media (max-width: 600px) {
    #btn-mobile {
      display: flex;
      padding: 1rem;
      font-size: 1rem;
      border: none;
      background: none;
      cursor: pointer;
      gap: 0.5rem;
    }

    #nav {
      border: none;
    }

    #hamburguer {
      width: 20px;
      border-top: 2px solid;
      color: var(--grey-0);
    }

    #hamburguer::after,
    #hamburguer::before {
      width: 20px;
      height: 2px;
      background-color: currentColor;
      content: "";
      display: block;
      margin-top: 5px;
      transition: 0.3s;
      position: relative;
    }

    #menu {
      display: block;
      position: absolute;
      width: 100%;
      top: 70px;
      right: 0px;
      background-color: var(--white);
      height: 0;
      z-index: 1000;
      transition: 0.6s;
      visibility: hidden;
      overflow-y: hidden;
    }

    #nav.active #menu {
      margin: 0;
      height: 150px;
      visibility: visible;
      overflow-y: auto;
    }

    #menu a {
      padding: 1rem 0px;
      margin: 0px 1rem;
    }

    #nav.active #hamburguer {
      border-top-color: transparent;
    }

    #nav.active #hamburguer::before {
      transform: rotate(135deg);
    }

    #nav.active #hamburguer::after {
      transform: rotate(-135deg);
      top: -7px;
    }

    #menu li:last-child a {
      width: 90%;
      margin-top: 30px;
    }
  }
`;
