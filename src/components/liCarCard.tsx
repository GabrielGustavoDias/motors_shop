import React, { useContext } from "react";
import {
  LiCarWrapper,
  LiUserInitials,
  LiCarTags,
  LiCardsContainer,
} from "../styles";
import { AdContext, UserContext } from "../contexts";
import { useNavigate } from "react-router-dom";

export const LiCarCard = ({ element }) => {
  const userInitials = (fullName: string) => {
    let sanitizedName = fullName.split(" ");
    let firstLetter = sanitizedName[0].charAt(0);
    let secondLetter = sanitizedName[sanitizedName.length - 1].charAt(0);

    return `${firstLetter}${secondLetter}`;
  };
  const navigate = useNavigate();
  const { getUser } = useContext(UserContext);
  const { setAd } = useContext(AdContext);

  const seller = () => {
    getUser(element.user.id);
    navigate(`/users/${element.user.id}`);
  };

  return (
    <LiCardsContainer>
      <LiCarWrapper>
        <div className="card-image">
          <img src={element.images}></img>
        </div>
        <div
          className="card-text"
          onClick={() => {
            navigate(`/advertisement/${element.id}`);
          }}
        >
          <h2>
            {element.name} - {element.model}
          </h2>
          <p>{element.description}</p>
          <div className="user-initials" onClick={() => seller()}>
            <LiUserInitials>{userInitials(element.user.name)}</LiUserInitials>{" "}
            <p>{element.user.name}</p>
          </div>
        </div>
        <div className="card-bottom">
          <LiCarTags>{element.km}</LiCarTags>
          <LiCarTags>{element.year}</LiCarTags>
          <p>R$ {element.price}</p>
        </div>
      </LiCarWrapper>
    </LiCardsContainer>
  );
};
