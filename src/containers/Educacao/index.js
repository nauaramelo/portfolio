import React from 'react';
import styled from "styled-components";


const Container = styled.div`
    width: 100%;
    height: 441px;
    background-color: #8fcbd9;
    display: flex;
    align-items: center;
    flex-direction: column;
`

const Title = styled.div`
    padding-top: 40px;
    width: 100%;
    height: 60px;
    font-family: Montserrat;
    font-size: 35px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.15px;
    text-align: center;
    color: #377d8c;
`

const Cards = styled.div`
    width: 1000px;
    padding-top: 50px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;  
`

const Card = styled.div`
    width: 300px;
    height: 220px;
    border-radius: 8px;
    background-color: #ffffff;
`

const TitleCard = styled.div`
    padding-top: 2vh;
    padding-left: 2vh;
    width: 262px;
    height: 50px;
    font-family: Montserrat;
    font-size: 21px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.28px;
    color: #377d8c;
`

const TextCard = styled.div`
    padding-top: 1vh;
    padding-left: 2vh;
    width: 267px;
    height: 122px;
    font-family: Montserrat;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.16px;
    color: #377d8c;
`

export const Educacao = () => {

    return (
        <Container>
            <Title>
                Educação
            </Title>
            <Cards>
                <Card>
                    <TitleCard>
                        Curso de Web Full Stack
                        na Labenu   
                    </TitleCard>
                    <TextCard>
                        6 meses - 2020 <br/>
                        <br/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    </TextCard>
                </Card>
                <Card>
                    <TitleCard>
                        Administração  
                    </TitleCard>
                    <TextCard>
                        4 anos - 2011-2014 <br/>
                        <br/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    </TextCard>
                </Card>
                <Card>
                    <TitleCard>
                        Relações Públicas   
                    </TitleCard>
                    <TextCard>
                        6 meses - 2020 <br/>
                        <br/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    </TextCard>
                </Card>
            </Cards>
        </Container>
    )
}