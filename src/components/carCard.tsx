import React from "react";
import { CarWrapper, UserInitials, CarTags, CardsContainer } from "../styles";

export const CarCard = ({ cars }) => {
  const userInitials = (fullName: string) => {
    let sanitizedName = fullName.split(" ");
    let firstLetter = sanitizedName[0].charAt(0);
    let secondLetter = sanitizedName[sanitizedName.length - 1].charAt(0);

    return `${firstLetter}${secondLetter}`;
  };

  return (
    <CardsContainer>
      {cars.map((car, index) => {
        return (
          <CarWrapper key={index}>
            <div className="card-image">
              <img src={car.images}></img>
            </div>
            <div className="card-text">
              <h2>{car.model}</h2>
              <p>{car.description}</p>
              <div className="user-initials">
                <UserInitials>{userInitials(car.name)}</UserInitials>{" "}
                <p>{car.name}</p>
              </div>
            </div>
            <div className="card-bottom">
              <CarTags>{car.km}</CarTags>
              <CarTags>{car.year}</CarTags>
              <p>R$ {car.price}</p>
            </div>
    
          </CarWrapper>
        );
      })}
    </CardsContainer>
  );
};
