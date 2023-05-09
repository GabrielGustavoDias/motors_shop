import styled, { css } from "styled-components";

interface iStyledInput {
  location: string;
}
export const StyledDiv = styled.div<iStyledInput>`

.li-filter{
  cursor: pointer;
}
  

  margin-bottom: 5px;
  ${({ location }) => {
    switch (location) {
      case "password":
        return css`
          height: 73px;
          position: relative;
          display: flex;
          flex-direction: column;
          transition: all 0.3s;

          label {
            color: #ccc;
            font-weight: 700px;
            transform: translateY(-2.25em);
            transform-origin: 0 0;
            transition: all 0.3s;
            margin-left: 5px;
          }
          input {
            box-shadow: none;
            border-radius: 0px;
            border-color: #ccc;
            border-style: none none solid none;
            height: 48px;
            font-size: 16px;
            transition: all 0.5s;
            padding-left: 10px;
            padding-top: 20px;
          }
          input::placeholder {
            color: transparent;
          }
          input:focus {
            box-shadow: none;
            outline: none;
            border-color: var(--brand-1);
          }
          input:focus + label,
          input:not(:placeholder-shown) + label {
            transform: translateY(-3.2em) scale(0.8);
          }

          &:focus-within {
            transform: scale(1.05, 1.05);
          }

          p {
            position: absolute;
            top: 40px;
            left: 2px;
            font-size: 12px;
          }
        `;
      case "input":
        return css`
          height: 73px;
          position: relative;
          display: flex;
          flex-direction: column;
          transition: all 0.3s;

          label {
            color: #ccc;
            font-weight: 700px;
            transform: translateY(-2.25em);
            transform-origin: 0 0;
            transition: all 0.3s;
            margin-left: 5px;
          }
          input {
            box-shadow: none;
            border-radius: 0px;
            border-color: #ccc;
            border-style: none none solid none;
            height: 48px;
            font-size: 16px;
            transition: all 0.5s;
            padding-top: 20px;
          }
          input::placeholder {
            color: transparent;
          }
          input:focus {
            box-shadow: none;
            outline: none;
            border-color: var(--brand-1);
          }
          input:focus + label,
          input:not(:placeholder-shown) + label {
            transform: translateY(-3.2em) scale(0.8);
          }

          &:focus-within {
            transform: scale(1.05, 1.05);
          }
          p {
            position: absolute;
            top: 40px;
            left: 2px;
            font-size: 12px;
          }
        `;
      case "motor":
        return css`
          height: 537px;
          position: relative;
          z-index: 0;
          img {
            object-fit: cover;
            height: 537px;
            width: 100vw;
            margin-top: 0px;
          }
          .filter {display:flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            position: absolute;
            width: 100%;
            height: 100%;
            font-size: 36px;
            line-height: 45px;
            text-align: center;
            color: var(--grey-10);
            background: linear-gradient(
              to top,
              rgba(0, 0, 0, 1),
              rgba(0, 0, 0, 0.29)
            );
            p{
              margin: 10px 7px 10px 7px;
            }
           
           
          }
          @media (max-width: 425px){
            .filter{
              font-size: 30px;
              line-height: 40px;
              justify-content: initial;
              font-weight: 500;
            }
            img {
            object-fit: cover;
            height: 250px;
            width: 100vw;
            margin-top: 100px;
            }}
          }
        `;
      case "homeMain":
        return css`
          display: flex;
          flex-direction: row;
          padding: 30px;
          position: relative;
          aside {
            width: 20%;
            display: flex;
            flex-direction: column;
            gap: 10px;
            p {
              margin: 0px;
              font-size: 28px;
              font-weight: 600;
              line-height: 35px;
              text-align: left;
            }
            ul {
              margin-left: -30px;
            }
            .buttonsSort {
              display: flex;
              flex-direction: row;
              gap: 26px;
              margin-bottom: 20px;
              button {
                margin-top: 17px;
                width: 125px;
                height: 37px;
              }
            }
            .buttonReset {
              width: 279px;
              height: 48px;
              align-self: center;
              background-color: var(--brand-1);
              color: var(--white);
            }
            .closingButton {
              background-color: var(--white);
              font-weight: 700;
              font-size: 24px;
            }
          }
          main {
            width: 80%;
            display: flex;
            flex-direction: column;

            .navigationDiv {
              align-self: center;
              display: flex;
              flex-direction: row;
              align-items: center;
              gap: 10px;
            }
            .ulCardBody {
              display: flex;
              flex-wrap: wrap;
              gap: 30px;
            }
            .buttonFilter {
              align-self: center;
              margin: 70px 0px;
              width: 279px;
              height: 48px;
              background-color: var(--brand-1);
              color: var(--white);
            }
          }
          @media (max-width: 768px) {
            aside {
              left: 0;

              background-color: white;
              width: 100%;
              z-index: 1;
              position: absolute;

              .mobileFilter {
                display: flex;
                justify-content: space-between;
                button {
                  margin-right: 20px;
                }
              }
              p {
                margin-left: 10px;
              }
            }
            main {
              width: 100%;
              .ulCardBody {
                gap: 30px;
                overflow-y: auto;
                flex-wrap: nowrap;
              }
            }
          }
        `;
      default:
    }
  }}
`;
