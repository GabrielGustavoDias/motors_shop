import styled from "styled-components";

export const StyledMainRegister = styled.main`
  display: flex;
  flex-direction: column;

  align-items: center;

  background: var(--grey-9);
  padding: 16px;

  .titleRegister {
    margin: 20px 0px;
    font-weight: var(--wheight-2);
  }

  .inputButton {
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-bottom: 12px;
  }
  .inputButton .inputBtn {
    height: 48px;
    font-weight: var(--wheight-2);
    width: 100%;
    border: 1.5px solid var(--grey-4);
    background-color: var(--grey-10);
    border-radius: 4px;
  }
  .active {
    height: 48px;
    font-weight: var(--wheight-2);
    width: 100%;
    color: var(--white);
    background-color: var(--brand-1);
    border: 1px solid var(--brand-1);
    border-radius: 4px;
  }
  .innerAddress {
    display: flex;
    flex-direction: row;
    gap: 30px;
    input {
      width: 100%;
    }
  }
`;
