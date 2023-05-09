import styled from "styled-components";

export const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    to top,
    var(--grey-9) 0%,
    var(--grey-9) 85%,
    var(--brand-1) 15%
  );
  padding: 25px 10px;

  .container {
    max-width: 1200px;
  }

  .section-block {
    background-color: var(--grey-10);
    padding: 20px;
    margin: 0px auto 25px auto;
    border-radius: 4px;
  }

  @media (min-width: 800px) {
    align-items: center;

    .container {
      position: relative;
    }
  }
`;

export const PicsAndSellerInfoSection = styled.section`
  .seller-info {
    width: auto;
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: flex-start
  }

  .div-account{
    display: flex;
    align-items: center;
    gap: 20px;
  }



 
  .seller-info span {
    background-color: var(
      ${"--ramdom-" + (Math.floor(Math.random() * 12) + 1)}
    );
    height: 80px;
    width: 80px;
    border-radius: 50%;
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--heading-4);
  }



  .account-type-btn{
    cursor: default!important;
    height: auto;
    width: auto;
    text-align: center;
    background-color: var(--brand-4);
    color: var(--brand-1);
  }

  .create-ad-btn{
    cursor: pointer ;
    height: auto;
    width: auto;
    text-align: center;
    background-color: var(--brand-4);
    color: var(--brand-1);
  }

  .seller-info p {
    color: var(--grey-2);
  }

  @media (min-width: 800px) {
    width: 100%;
    .seller-info {
      div {
        width: 75vw;
      }
    }
  }
`;

export const ListAdvertisement = styled.ul`
  width: auto;
  padding: 30px;
`;
