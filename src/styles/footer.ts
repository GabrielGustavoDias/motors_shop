import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: var(--grey-0);
  display: flex;
  justify-self: flex-end;

  .footer-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 90%;
    margin: 0 auto;
    padding: 20px;
    align-items: center;
    justify-content: space-between;
    color: var(--white);
  }

  .footer-container p {
    font-size: 12px;
  }

  .footer-container a {
    text-decoration: none;
    color: var(--white);
    background-color: var(--grey-1);
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
  }

  @media (min-width: 600px) {
    .footer-container {
      flex-direction: row;
      padding: 40px 0px;
    }
  }
`;
