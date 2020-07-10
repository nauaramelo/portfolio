import React from 'react';
import styled from "styled-components";
import linkedin from './linkedin.png';
import git from './git.png';

const Container = styled.div`
    width: 100%;
    height: 390px;
    background-color: #337d8d;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Title = styled.div`
    width: 100%;
    height: 52px;
    font-family: Montserrat;
    font-size: 42px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.25px;
    text-align: center;
    color: #ffffff;
`
const Text = styled.div`
    margin-top: 35px;
    width: 100%; 
    height: 110px;
    font-family: Montserrat;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.24px;
    text-align: center;
    color: #ffffff;
`

const Buttons = styled.div`
    margin-top: 54px;
    display: flex;
    align-items: center;
    justify-content: space-evenly; 
    width: 130px;
`

const Memoji = styled.img`
    width: 40px;
    height: 37px;
    object-fit: contain;
`

export const Contact = () => {

    return (
        <Container id='Contato'>
            <Title>
                Contrate-me!
            </Title>
            <Text>
                Procuro oportunidade de trabalho onde eu possa aprender, <br/>
                me desenvolver e evoluir na minha carreia profissional.<br/>
                <br/>
                E-mail para contato: nauaramelo@gmail.com
            </Text>
            <Buttons> 
                <a  href={'https://www.linkedin.com/in/nauara-melo-mayer-464a82135/'} target='blank'>
                    <Memoji src={linkedin}/>
                </a>
                <a  href={'https://github.com/nauaramelo'} target='blank'>
                    <Memoji src={git}/>
                </a>
            </Buttons>
        </Container>
    )
}