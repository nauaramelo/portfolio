import React from 'react';
import styled from "styled-components";
import perfil2 from './perfil2.png';


const Container = styled.div`
    height: 560px;
    display: grid;
    grid-template-areas:
    "card photo";
    grid-template-columns: 70% auto;
`

const CardEuSou = styled.div`
    grid-area: card;
    /* width: 840px; */
    height: 100%;
    background-color: rgba(113, 202, 223, 0.47);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const NauaraMelo = styled.div`
    /* width: 300px;  */
    height: 122px;
    font-family: Montserrat;
    font-size: 50px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.29px;
    color: #337d8d; 
    text-align: initial;
`

const Subtitulo = styled.div`
    /* width: 300px; */
    padding-left: 2vh;
    height: 29px;
    font-family: Montserrat;
    font-size: 22px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.32px;
    color: #337d8d;
`
const Subtitulo2 = styled.div`
    /* width: 337px; */
    padding-left: 2vh;
    height: 19px;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.22px;
    color: #626262;
`
const ImagemDiv = styled.div`
    grid-area: photo;
    height: 100%;
    width: 100%;
`

const Photo = styled.img`
    width: 100%;
    height: 100%; 
`


export const QuemSou = (props) => {

    return (
        <Container>
            <CardEuSou>
                <NauaraMelo>
                    Eu sou <br/>
                    <strong> Nauara Melo</strong>
                </NauaraMelo>
                <Subtitulo>
                    Desenvolvedora Web Full Stack
                </Subtitulo>
                <Subtitulo2>
                    Apaixonada por tecnologia e programação.
                </Subtitulo2>
            </CardEuSou>
            <ImagemDiv>
                <Photo src={perfil2} title="photo"/>
            </ImagemDiv>
        </Container>
    )
}