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
    text-align: justify;
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
                        A Labenu é uma startup que forma Desenvolvedores Web Full Stack prontos para o mercado de trabalho. São mais de 1000 horas de programação que faz com que seus alunos sejam profissionais completos tanto no Back-End quanto no Front End. 
                    </TextCard>
                </Card>
                <Card>
                    <TitleCard>
                        Administração na Faculdade Maurício de Nassau
                    </TitleCard>
                    <TextCard>
                        4 anos - 2011-2014 <br/>
                        <br/>
                        Bacharel em Administração pela Faculdade Mauricio de Nassau, estudei planejamento, organização e gerenciamento do uso dos recursos pessoais e financeiros de uma organização. Além de práticas para elaboração de estratégias visando melhorar o desempenho da empresa, maximizar os lucros, evitar desperdícios e reduzir custos.
                    </TextCard>
                </Card>
                <Card>
                    <TitleCard>
                        Relações Públicas na Universidade Federal da PB
                    </TitleCard>
                    <TextCard>
                        5 anos - 2012 - 2017 <br/>
                        <br/>
                        A UFPB forma profissionais que constroem, promovem e preservam a imagem e reputação de empresas, marcas e instituições, por meio de projetos de comunicação. Suas estratégias criativas afetam diretamente a dinâmica das organizações, ao colaborar com a criação da identidade e da imagem corporativa. 
                    </TextCard>
                </Card>
            </Cards>
        </Container>
    )
}