import styled, { createGlobalStyle } from 'styled-components';
import BGImage from './images/img.jpg'

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }
    body {
        // background-image: url(${BGImage});
        // background-size: cover;
        // background-repeat: no-repeat;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }

    * {
        box-sizing: border-box;
        font-family: 'Nanum Pen Script', cursive;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
        color: #fff;
    }

    .score {
        color: #fff;
        font-size: 2rem;
        font-weight: bold;
        margin: 0;
    }

    h1 {
        color: #fff;
    }

    .start, .next {
        cursor: pointer;
    }
`;