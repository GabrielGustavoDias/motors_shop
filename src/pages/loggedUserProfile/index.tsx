import React, { useContext, useEffect } from "react";
import { Header, Footer, ModalRegisterAdvertsement } from "../../components";
import {
  MainSection,
  PicsAndSellerInfoSection,
} from "../../styles/loggedUserProfilePage";
import { AdvertisementList } from "../../components";
import { AdContext, UserContext } from "../../contexts";

export const LoggedUserProfile = () => {
  const { user, setUser, getUserProfile, getInitials } =
    useContext(UserContext);
  const { adRegisterModal, setAdRegisterModal } = useContext(AdContext);

  useEffect(() => {
    getUserProfile();
  }, []);

  return (
    <>
      <Header></Header>
      <MainSection>
        <div className="container">
          <PicsAndSellerInfoSection>
            <div className="section-block seller-info">
              <span className="seller-profile-logo">A</span>
              <div className="div-account">
                <h3>{user?.name}</h3>
                <button className="account-type-btn">{user?.account_type}</button>
              </div>
              <p>{user?.description}</p>
              <button className="create-ad-btn" onClick={() => setAdRegisterModal(true)}>
                Criar Anúncio
              </button>
            </div>
          </PicsAndSellerInfoSection>

          <h2>Anúncios</h2>
          <AdvertisementList />
        </div>
      </MainSection>
      <Footer />
      {adRegisterModal && <ModalRegisterAdvertsement />}
    </>
  );
};
