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

export const CarInfoSection = styled.section`
  .car-info-pic {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #ad-cover {
    width: 100%;
    height: 100%;
  }

  .car-info {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .car-info h1 {
    margin: 15px 0;
  }

  .car-info button {
    align-self: self-start;
    margin-bottom: 10px;
  }

  .car-info__price-tags {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .car-info__tags-container {
    display: flex;
    gap: 10px;
  }

  .car-info__tags-container span {
    color: var(--brand-1);
    background-color: var(--brand-4);
    padding: 7px;
    border-radius: 4px;
  }

  .car-info-description p {
    margin-top: 20px;
  }

  @media (min-width: 800px) {
    width: 60%;
  }
`;

export const PicsAndSellerInfoSection = styled.section`
  .car-pics ul {
    padding: 0;
    
  }

  .car-pics__card{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
  }

  .imgDefaultMini{
    height: 50px;
    cursor: pointer;
    border-radius: 5px;
    background-color: var(--grey-7);
  }

  .seller-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
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

  .seller-info p {
    color: var(--grey-2);
  }

  .seller-info button {
    margin: 15px 0;
  }



  @media (min-width: 800px) {
    position: absolute;
    right: 50%;
    top: 0;
    width: 35%;
    max-width: 495px;
    transform: translateX(139%);
  }
`;

export const CommentsSection = styled.section`
  .comments-section ul {
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  .comment-card > p {
    font-size: 14px;
    color: var(--grey-2);
    margin: 0;
  }

  .profile-content {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .profile-content > h3 {
    font-size: 15px;
    color: var(--grey-1);
    font-weight: var(--wheight-3);
  }

  .profile-content > div {
    background-color: var(
      ${"--ramdom-" + (Math.floor(Math.random() * 12) + 1)}
    );
    color: var(--white);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: var(--wheight-4);
  }

  .profile-content > span {
    color: var(--grey-3);
    font-size: 12px;
  }

  .comment-field form {
    border-radius: 4px;
    border: 1px solid var(--grey-7);
    padding: 10px;
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
  }

  .comment-field textarea {
    border: transparent;
    resize: none;
    font-family: "Lexend", sans-serif;
  }

  .comment-field button {
    align-self: self-end;
  }

  .comment-field__sugestions {
    display: inline-block;
    color: var(--grey-3);
    background-color: var(--grey-7);
    margin: 0 10px 0 3px;
    padding: 2px 12px;
    font-size: 12px;
    border-radius: 25px;
  }

  @media (min-width: 800px) {
    width: 60%;
    max-width: 600px;
  }
`;
