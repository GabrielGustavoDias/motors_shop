import React, { useContext } from "react";
import { AdvertisementCard } from "./adCard";
import { UserContext } from "../contexts";
import { ListAdvertisement } from "../styles/profilePage";

export const AdvertisementList: any = () => {
  const { cars } = useContext(UserContext);
  return (
    <>
      {cars!.length > 0 ? (
        <ListAdvertisement>
          {cars!.map((element, key) => {
            return <AdvertisementCard car={element} key={key} />;
          })}
        </ListAdvertisement>
      ) : (
        <h1>"Você não possui nenhum anúncio"</h1>
      )}
    </>
  );
};
