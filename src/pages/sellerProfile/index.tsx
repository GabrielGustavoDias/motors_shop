import React, { useContext } from "react";
import { Footer, Header } from "../../components";
import { UserContext } from "../../contexts";
import { AdvertisementList } from "../../components/advertisementList";
import {
  MainSection,
  PicsAndSellerInfoSection,
} from "../../styles/profilePage";

export const SellerPage = () => {
  const { sellerUser, getInitials } = useContext(UserContext);
  return (
    <>
      <Header></Header>
      <MainSection>
        <div className="container">
          <PicsAndSellerInfoSection>
            <div className="section-block seller-info">
              <span className="seller-profile-logo">
                {/* {getInitials(user?.name)} */}
                A
              </span>
              <div>
                <h3>{sellerUser?.name}</h3>
                <button>{sellerUser?.account_type}</button>
              </div>
              <p>{sellerUser?.description}</p>
            </div>
          </PicsAndSellerInfoSection>

          <h2>Anúncios</h2>
          <AdvertisementList />
        </div>
      </MainSection>
      <Footer />
    </>
  );
};
