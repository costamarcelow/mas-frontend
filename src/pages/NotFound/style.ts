import styled from 'styled-components';

import loginBackgroundImg from '../../assets/bg-shapes.svg';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;

export const Content = styled.div`
    background: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    max-width: 700px;
`;

export const Linha = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
        margin-bottom: 30px;
        font-weight: bold;
        color: #3CB371;
        
    }`;

    export const Background = styled.div`
    flex: 1;
    background: linear-gradient(180deg, #1B7E48 0%, rgba(255, 255, 255, 0) 100%), #3CB371 url(${loginBackgroundImg}) no-repeat center;
    background-size: cover;
  `;