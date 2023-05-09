import styled from "styled-components";

export const ContainerModal = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  max-width: 600px;
  background-color: white;
  z-index: 10;
  position: fixed;
  left: 50%;
  transform: translate(-50%, 50%);
  margin-top: -175px;
  border-radius: 4px;
  padding: 25px;

  .modal__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 4px 4px 0px 0px;
    padding: 15px 0px;
    margin-top: -30px;
    margin-bottom: 10px;
  }

  .modal__header > button {
    background-color: transparent;
    color: var(--grey-4);
    padding: 10px;
    border: 1px solid transparent;
    font-size: var(--heading-6);
  }
`;

export const ModalContentRegAd = styled.div`
  margin-top: 10px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  background-color: white;
  z-index: 10;
  width: 374px;
  max-width: 520px;
  border-radius: 4px;
  padding: 25px;

  /* @media (min-width: 425px) {
    left: vw;
  } */

  form {
    margin-top: -10px;
  }

  textarea {
    resize: none;
    height: 80px;
    font-size: var(--heading-7);
    padding: 10px;
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

  .addInput {
    font-size: 12px;
    background-color: var(--brand-4);
    margin-bottom: 10px;
  }

  .btnConfirmCancel {
    display: flex;
    justify-content: space-between;
  }

  .btnConfirmCancel .confirm {
    color: var(--brand-4);
    background-color: var(--brand-3);
    width: 193px;
  }
  .btnConfirmCancel .cancel {
    width: 100px;
  }
`;

export const ModalEditAddressContent = styled.div`
  margin-top: 10px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  background-color: white;
  z-index: 10;
  width: 374px;
  max-width: 520px;
  max-height: 550px;
  border-radius: 4px;
  padding: 25px;

  .innerAddress {
    display: flex;
    flex-direction: row;
    gap: 30px;
    input {
      width: 100%;
    }
  }
  .buttonsDiv {
    display: flex;
    flex-direction: row;
    gap: 20px;
    .submit {
      background-color: var(--brand-3);
      height: 48px;
      width: 192px;
    }
    .edit {
      height: 48px;
      width: 113px;
    }
  }
`;

export const ModalEditUserContent = styled.div`
  margin-top: 10px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  background-color: white;
  z-index: 10;
  width: 100vw;
  max-width: 450px;
  max-height: 800px;
  border-radius: 4px;
  padding: 25px;
  form {
    width: 90%;
  }

  h1 {
    margin-top: -30px;
  }

  .buttonsDiv {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
    .cancel {
      background-color: var(--grey-6);
      height: 48px;
      width: 150px;
    }
    .exclude {
      background-color: var(--alert-2);
      color: var(--alert-1);
      height: 48px;
      width: 150px;
    }
    .submit {
      background-color: var(--brand-1);
      color: var(--white);
      height: 48px;
      width: 150px;
    }
  }
`;

export const ModalDeleteConfirmUsercontent = styled.div`
  margin-top: 10px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  background-color: white;
  z-index: 10;
  width: 100vw;
  max-width: 450px;
  max-height: 400px;
  border-radius: 4px;
  padding: 25px;
  gap: 20px;

  .cancel {
    background-color: var(--grey-6);
    height: 68px;
  }
  .confirm {
    background-color: var(--alert-2);
    color: var(--alert-1);
    height: 68px;
  }
`;

export const ModalContentEditAdv = styled.div`
  margin-top: 10px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  background-color: white;
  z-index: 10;
  width: 374px;
  max-width: 520px;
  border-radius: 4px;
  padding: 25px;

  /* @media (min-width: 425px) {
    left: vw;
  } */

  form {
    margin-top: -10px;
  }

  textarea {
    resize: none;
    height: 80px;
    font-size: var(--heading-7);
    padding: 10px;
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

  .addInput {
    font-size: 12px;
    background-color: var(--brand-4);
    margin-bottom: 10px;
  }

  .btnConfirmCancel {
    display: flex;
    justify-content: space-between;
  }

  .btnConfirmCancel .confirm {
    color: var(--brand-4);
    background-color: var(--brand-3);
    width: 193px;
  }
  .btnConfirmCancel .cancel {
    background-color: var(--alert-2);
    color: var(--alert-1);
    width: 100px;
  }
`;
