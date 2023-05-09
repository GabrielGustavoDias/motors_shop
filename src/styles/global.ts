import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        //collor palette
        --brand-1: #4529e6;
        --brand-2: #5126ea;
        --brand-3: #b0a6f0;
        --brand-4: #edeafd;

        //grey scale
        --black: #000000;
        --grey-0: #0b0d0d;
        --grey-1: #212529;
        --grey-2: #495057;
        --grey-3: #868e96;
        --grey-4: #adb5bd;
        --grey-5: #ced4da;
        --grey-6: #dee2e6;
        --grey-7: #e9ecef;
        --grey-8: #f1f3f5;
        --grey-9: #f8f9fa;
        --grey-10: #fdfdfd;
        --white: #ffffff;

        //feedback palette
        --alert-1: #cd2b31;
        --alert-2: #fdd8d8;
        --alert-3: #ffe5e5;
        --success-1: #18794e;
        --success-2: #ccebd7;
        --success-3: #ddf3e4;

        //ramdom profiles palette
        --ramdom-1: #e34d8c;
        --ramdom-2: #c04277;
        --ramdom-3: #7d2a4d;
        --ramdom-4: #7000ff;
        --ramdom-5: #6200e3;
        --ramdom-6: #36007d;
        --ramdom-7: #349974;
        --ramdom-8: #2a7d5f;
        --ramdom-9: #153d2e;
        --ramdom-10: #6100ff;
        --ramdom-11: #5700e3;
        --ramdom-12: #30007d;

        //typography
        --wheight-1: 700;
        --wheight-2: 600;
        --wheight-3: 500;
        --wheight-4: 400;

        --heading-1: 44px;
        --heading-2: 36px;
        --heading-3: 32px;
        --heading-4: 28px;
        --heading-5: 24px;
        --heading-6: 20px;
        --heading-7: 16px;
        --body-1: 16px;
        --body-2: 14px;
        --button-big-text: 16px;
        --button-medium-text: 14px;
        --input-placeholder: 16px;
        /* --imput-label: 14px;  */

    }

    body {
        font-family: 'Lexend', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    li {
        list-style: none;
    }

    button{
        font-family: "Lexend", sans-serif;
        cursor: pointer;
        padding: 10px;
        border: none;
        border-radius: 4px;
    }
    figure{
        width: 100%;
    }

`;
export const DivMain = styled.div`
  height: 100%;
  width: 100%;
`;
