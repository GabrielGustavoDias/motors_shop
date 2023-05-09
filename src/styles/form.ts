import styled from "styled-components";
export const StyledForm = styled.form`
  margin-top: 20px;
  text-align: left;
  width: 300px;
  max-width: 412px;
  background: var(--grey-10);
  padding: 16px;
  display: flex;
  gap: 5px;
  flex-direction: column;

  .forgotPass {
    text-align: right;
    margin-top: -5px;
  }

  button {
    height: 48px;
    font-weight: var(--wheight-2);
  }

  .submit {
    background-color: var(--brand-1);
    color: var(--white);
  }

  .registerText {
    text-align: center;
  }

  .register {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    height: 48px;
    border-radius: 4px;
    border: 1.5px solid;
    color: var(--grey-0);
    border-color: var(--grey-4);
    font-weight: var(--wheight-2);
    background-color: var(--grey-10);
  }
  .register:visited {
    color: var(--grey-0);
  }
`;
