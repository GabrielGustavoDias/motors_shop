import React, { useContext, useEffect, useState } from "react";
import { Header } from "../../components/header";
import { CarCard, Footer, LiCarCard } from "../../components";
import { objMockArr } from "../../mocks";
import { StyledDiv } from "../../styles";
import Photo from "../../assets/Photo.png";
import { AdContext, UserContext } from "../../contexts";

export const Home = () => {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [color, setColor] = useState("");
  const [year, setYear] = useState("");
  const [fuel, setFuel] = useState(0);
  const [km, setKm] = useState("");
  const [price, setPrice] = useState("");

  const brandList = [];
  const modelList = [];
  const colorList = [];
  const yearList = [];
  const fuelList = [];
  const token = localStorage.getItem("@access_token");

  const { getUserProfile } = useContext(UserContext);

  const { apiResp, getAllAds } = useContext(AdContext);

  useEffect(() => {
    if (token) {
      getUserProfile();
    }
    getAllAds();
  }, []);

  //Barra Lateral
  apiResp.forEach((element) => {
    if (!brandList.includes(element.name as never)) {
      brandList.push(element.name as never);
    }
    if (!modelList.includes(element.model.split(" ")[0] as never)) {
      modelList.push(element.model.split(" ")[0] as never);
    }
    if (!colorList.includes(element.color as never)) {
      colorList.push(element.color as never);
    }
    if (!yearList.includes(element.year as never)) {
      yearList.push(element.year as never);
    }
    if (!fuelList.includes(element.fuel as never)) {
      fuelList.push(element.fuel as never);
    }
  });
  brandList.sort((a: string, b: string) => a.localeCompare(b));
  modelList.sort((a: string, b: string) => a.localeCompare(b));
  colorList.sort((a: string, b: string) => a.localeCompare(b));
  yearList.sort((a: string, b: string) => b.localeCompare(a));

  //Filtros
  const filterBrand = apiResp.filter((element) =>
    brand === "" ? true : brand === element.name
  );

  const filterModel = filterBrand.filter((element) =>
    model === "" ? true : element.model.includes(model)
  );

  const filterColor = filterModel.filter((element) =>
    color === "" ? true : color === element.color
  );

  const filterYear = filterColor.filter((element) =>
    year === "" ? true : year === element.year
  );

  const filterFuel = filterYear.filter((element) =>
    fuel === 0 ? true : fuel === element.fuel
  );

  const sortKm = filterFuel.sort((a, b) => {
    if (km === "Minimo") {
      return a.km - b.km;
    } else if (km === "Maximo") {
      return b.km - a.km;
    } else {
      return true;
    }
  });

  const sortPrice = sortKm.sort((a, b) => {
    if (price === "Minimo") {
      return a.price - b.price;
    } else if (price === "Maximo") {
      return b.price - a.price;
    } else {
      return true;
    }
  });

  const reset = () => {
    setBrand("");
    setModel("");
    setColor("");
    setYear("");
    setFuel(0);
    setKm("");
    setPrice("");
  };
  const [counter, setCounter] = useState(0);
  const pages = Math.ceil(sortPrice.length / 12);
  let controlCounter = counter;
  const addPage = () => {
    if (counter < pages - 1) {
      controlCounter++;
    }
    setCounter(controlCounter);
  };
  const prevPage = () => {
    if (counter > 0) {
      controlCounter--;
    }
    setCounter(controlCounter);
  };

  const renderedCards = sortPrice.filter((element, index) => {
    if (index < 12 + 12 * counter && index >= 12 * counter) {
      return element;
    }
  });

  //Mobile
  const [show, setShow] = useState(false);
  const [display, setDisplay] = useState(true);
  useEffect(() => {
    handleSize();
  }, []);

  const handleSize = () => {
    if (window.innerWidth <= 800) {
      setShow(true);
      setDisplay(false);
    } else {
      setShow(false);
      setDisplay(true);
    }
  };
  window.addEventListener("resize", handleSize);

  return (
    <>
      <Header></Header>
      <StyledDiv location="motor" className="bannerStore">
        <div className="filter">
          <p>Motors Shop</p>
          <p>A melhor plataforma de anúncios de carros do país</p>
        </div>
        <img src={Photo} alt="Carro"></img>
      </StyledDiv>
      <StyledDiv location="homeMain">
        {display ? (
          <aside>
            {show ? (
              <div className="mobileFilter">
                <p>Filtro</p>{" "}
                <button
                  className="closingButton"
                  onClick={() => setDisplay(false)}
                >
                  x
                </button>
              </div>
            ) : null}
            <p>Marca</p>
            <ul>
              {brandList.map((element, index) => (
                <li className="li-filter"
                  key={index}
                  onClick={() => {
                    setBrand(element);
                    setCounter(0);
                  }}
                >
                  {element}
                </li>
              ))}
            </ul>
            <p>Modelo</p>
            <ul>
              {modelList.map((element, index) => (
                <li
                className="li-filter"
                  key={index}
                  onClick={() => {
                    setModel(element);
                    setCounter(0);
                  }}
                >
                  {element}
                </li>
              ))}
            </ul>
            <p>Cor</p>
            <ul>
              {colorList.map((element, index) => (
                <li
                className="li-filter"
                  key={index}
                  onClick={() => {
                    setColor(element);
                    setCounter(0);
                  }}
                >
                  {element}
                </li>
              ))}
            </ul>
            <p>Ano</p>
            <ul>
              {yearList.map((element, index) => (
                <li
                className="li-filter"
                  key={index}
                  onClick={() => {
                    setYear(element);
                    setCounter(0);
                  }}
                >
                  {element}
                </li>
              ))}
            </ul>
            <p>Combustível</p>
            <ul>
              {fuelList.map((element, index) => {
                let name = "";
                if (element == 1) {
                  name = "Flex";
                } else if (element == 2) {
                  name = "Gasolina";
                } else if (element == 3) {
                  name = "Elétrico";
                }

                return (
                  <li
                  className="li-filter"
                    key={index}
                    onClick={() => {
                      setFuel(element);
                      setCounter(0);
                    }}
                  >
                    {name}
                  </li>
                );
              })}
            </ul>
            <p>KM</p>
            <div className="buttonsSort">
              <button
                onClick={() => {
                  setKm("Minimo");
                  setCounter(0);
                }}
              >
                Minimo
              </button>
              <button
                onClick={() => {
                  setKm("Maximo");
                  setCounter(0);
                }}
              >
                Maximo
              </button>
            </div>
            <p>Preço</p>
            <div className="buttonsSort">
              <button
                onClick={() => {
                  setPrice("Minimo");
                  setCounter(0);
                }}
              >
                Minimo
              </button>
              <button
                onClick={() => {
                  setPrice("Maximo");
                  setCounter(0);
                }}
              >
                Maximo
              </button>
            </div>

            <button className="buttonReset" onClick={() => reset()}>
              Resetar Filtros
            </button>
          </aside>
        ) : null}
        <main className="mainBody">
          <ul className="ulCardBody">
            {renderedCards.map((element, index) => (
              <LiCarCard element={element} key={index} />
            ))}
          </ul>
          {show ? (
            <button className="buttonFilter" onClick={() => setDisplay(true)}>
              Filtros
            </button>
          ) : null}
          <div className="navigationDiv">
            {counter > 0 ? (
              <button onClick={() => prevPage()}>{"< Voltar"}</button>
            ) : null}
            {counter + 1 + " de " + pages}
            {counter == pages - 1 ? null : (
              <button onClick={() => addPage()}>{"Seguinte >"}</button>
            )}
          </div>
        </main>
      </StyledDiv>
      <Footer></Footer>
    </>
  );
};
