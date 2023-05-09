import React, { useContext, useEffect } from "react";
import { Footer, Header, ModalAd } from "../../components";
import {
  BlackButton,
  BlueButton,
  CarInfoSection,
  CommentsSection,
  InactiveButton,
  MainSection,
  PicsAndSellerInfoSection,
} from "../../styles";
import { AdContext } from "../../contexts/adContext";
import { UserContext } from "../../contexts";
import { useNavigate, useParams } from "react-router-dom";
import { comments as schema } from "../../schemas";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IComments } from "../../interfaces";
import carDefault from "../../assets/carDefault.png";

export const AdDetailPage = () => {
  const {
    ad,
    getTimeSinceCommented,
    setImgUrl,
    setAdImgModalOpen,
    adImgModalOpen,
    postCommentary,
    getOneAd,
  } = useContext(AdContext);
  const { getInitials, user, getUser, getUserProfile } =
    useContext(UserContext);
  const navigate = useNavigate();
  const token = localStorage.getItem("@access_token");

  let { id } = useParams();

  useEffect(() => {
    if (token) {
      getUserProfile();
    }
    getOneAd(id!);
  }, []);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<IComments>({ resolver: yupResolver(schema) });

  const seller = (id: string) => {
    getUser(id);
    navigate(`/users/${id}`);
  };

  const commentary = (data: string) => {
    postCommentary(ad!.id!, data);
  };
  return (
    <>
      <Header />
      {ad && (
        <MainSection>
          <div className="container">
            <CarInfoSection>
              <div className="section-block car-info-pic">
                <img
                  id="ad-cover"
                  src={carDefault}
                  alt="imagem principal do anuncio"
                />
              </div>
              <div className="section-block car-info">
                <h1>
                  {ad.name} - {ad.model}
                </h1>
                <div className="car-info__price-tags">
                  <div className="car-info__tags-container">
                    <span>{ad.year}</span>
                    <span>{ad.km} KM</span>
                  </div>
                  <p>R$ {ad.price},00</p>
                </div>
                {user ? (
                  <BlueButton type="button">Comprar</BlueButton>
                ) : (
                  <InactiveButton disabled>Comprar</InactiveButton>
                )}
              </div>
              <div className="section-block car-info-description">
                <h2>Descrição</h2>
                <p>{ad.description}</p>
              </div>
            </CarInfoSection>
            <PicsAndSellerInfoSection>
              <div className="section-block car-pics">
                <h2>Fotos</h2>
                <ul>
                  <li
                    className="car-pics__card"
                    onClick={() => {
                      setImgUrl(carDefault);
                      setAdImgModalOpen(true);
                    }}
                  >
                    <img
                      className="imgDefaultMini"
                      src={carDefault}
                      alt="imagem do anúncio"
                    />
                    <img
                      className="imgDefaultMini"
                      src={carDefault}
                      alt="imagem do anúncio"
                    />
                    <img
                      className="imgDefaultMini"
                      src={carDefault}
                      alt="imagem do anúncio"
                    />
                    <img
                      className="imgDefaultMini"
                      src={carDefault}
                      alt="imagem do anúncio"
                    />
                    <img
                      className="imgDefaultMini"
                      src={carDefault}
                      alt="imagem do anúncio"
                    />
                    <img
                      className="imgDefaultMini"
                      src={carDefault}
                      alt="imagem do anúncio"
                  />
                  </li>
                </ul>
              </div>
              <div className="section-block seller-info">
                <span className="seller-profile-logo">
                  {getInitials(ad.user.name)}
                </span>
                <h3>{ad.user.name}</h3>
                <p>{ad.user.description}</p>
                <BlackButton type="button" onClick={() => seller(ad.user.id)}>
                  Ver todos anuncios
                </BlackButton>
              </div>
            </PicsAndSellerInfoSection>
            <CommentsSection>
              <div className="section-block comments-section">
                <h2>Comentários</h2>
                {ad.comments.length && (
                  <ul>
                    {ad.comments
                      .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
                      .map((comment) => {
                        return (
                          <li className="comment-card" key={comment.id}>
                            <div className="profile-content">
                              <div>{getInitials(comment.user.name)}</div>
                              <h3>{comment.user.name}</h3>
                              <span>
                                • {getTimeSinceCommented(comment.createdAt)}
                              </span>
                            </div>
                            <p>{comment.text}</p>
                          </li>
                        );
                      })}
                  </ul>
                )}
              </div>
              <div className="section-block comment-field">
                {user && (
                  <>
                    <div className="profile-content">
                      <div className="comment-field__icon">
                        {getInitials(user.name)}
                      </div>
                      <h3>{user.name}</h3>
                    </div>
                  </>
                )}
                <form onSubmit={handleSubmit(commentary)}>
                  <textarea
                    id="text"
                    placeholder="Digitar comentário"
                    {...register("text")}
                  />
                  {user ? (
                    <BlueButton type="submit">Comentar</BlueButton>
                  ) : (
                    <InactiveButton disabled>Comentar</InactiveButton>
                  )}
                </form>
                <span className="comment-field__sugestions">
                  Gostei muito!{" "}
                </span>
                <span className="comment-field__sugestions">Incrível </span>
                <span className="comment-field__sugestions">
                  Recomendarei para meus amigos!
                </span>
              </div>
            </CommentsSection>
          </div>
        </MainSection>
      )}
      <Footer />
      {adImgModalOpen && <ModalAd />}
    </>
  );
};
