import styled from "styled-components";

export const LiCardsContainer = styled.li``;

export const LiCarWrapper = styled.div`
  width: 312px;
  height: 450px;

  position: relative;

  display: flex;

  flex-direction: column;
  gap: 8px;
  

  .card-image {
    width: 310px;
    height: 150px;

    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid var(--grey-7);

    background-color: var(--grey-7);

    img {
      height: 110px;
      object-fit: contain;
    }

    @media (max-width: 768px) {
      width: 320px;
    }
  }

h2{
  cursor: pointer;
}

  .card-text {
    width: 310px;
    height: 200px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;

    font-size: var(--body-2);

    .user-initials {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      gap: 8px;
      font-size: var(--body-1);
    }

    @media (max-width: 768px) {
      width: 220px;
    }
  }

  .card-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      font-weight: var(--wheight-3);
    }
  }

  .car-status {
    padding: 5px;

    position: absolute;
    top: 2%;
    left: 2%;

    text-align: center;

    color: var(--white);

    background-color: blue;
  }

  .active {
    background-color: var(--brand-1);
  }

  .inactive {
    background-color: var(--grey-4);
  }
`;

export const LiCarTags = styled.span`
  height: 24px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 8px;

  border-radius: 4px;

  background-color: var(--brand-4);
  color: var(--brand-1);
`;

export const LiUserInitials = styled.div`
  height: 32px;
  width: 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--brand-2);
  color: var(--grey-5);

  border-radius: 50%;
`;
