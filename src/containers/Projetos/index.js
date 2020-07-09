import React from 'react';
import styled from "styled-components";
import laptop from './laptop.png';
import ipad from './ipad.png';
import imac from './imac.png';

const Container = styled.div`
    width: 100%;
    height: 1284px;
    background-color: #bf3c3b;
`

const Title = styled.div`
    padding-top: 40px;
    width: 100%;
    height: 60px;
    /* width: 183px;
    height: 30px; */
    font-family: Montserrat;
    font-size: 35px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.15px;
    text-align: center;
    color: #ffffff;
`

const TitleCard = styled.div`
    width: 172px;
    height: 52px;
    font-family: Montserrat;
    font-size: 42px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.25px;
    color: #ffffff;
`

const CaptionCard = styled.div`
    width: 104px;
    height: 25px;
    font-family: Montserrat;
    font-size: 21px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.28px;
    color: #ffffff;
`

const Text = styled.div`
    padding-bottom: 2vh;
    padding-top: 18px;
    height: 122px;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.16px;
    color: #ffffff;
    text-align: justify;
`

const ButtonFullStack = styled.button`
    /* width: 140px; */
    height: 30px;
    width: 140px;
    margin-right: 1vh;
    border-radius: 8px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    background-color: #337d8d;
    color: #ffffff;
`

const Button = styled.button`
    margin-top: 2vh;
    width: 140px;
    height: 30px;
    border-radius: 8px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    background-color: #337d8d;
    color: #ffffff;
`

const ButtonAllProjects = styled.button`
    margin-top: 12vh;
    width: 150px;
    height: 30px;
    border-radius: 8px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    border: solid 1px #ffffff;
    background-color: #bf3c3b;
    color: #ffffff;
`

const Memoji = styled.img`
    grid-area: "memoji";
    /* width: 312px;
    height: 216px; */
    width: 100%;
    height: 200px;
    object-fit: contain;
`
const Cards = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;  
`
const Card = styled.div`
    padding-top: 12vh;
    display: grid;
    grid-template-columns: 50% auto;
    column-gap: 3.5vh;
    width: 522px;
`

const ButtonsCostumers = styled.div`
    display: flex;
    flex-direction: row;
`
const DivButton = styled.div`
    display: flex;
    justify-content: flex-end;
    text-decoration: none;
`

const Infos = styled.div`
    grid-area: "infos";
`

export const Projetos = () => {

    return (
        <Container>
            <Title>
                Meus Projetos
            </Title>
            <Cards>
                <Card>
                    <Memoji src={laptop}/>
                    <Infos>
                        <TitleCard>
                            4eddit
                        </TitleCard>
                        <CaptionCard>
                            Front-end
                        </CaptionCard>
                        <Text>
                            Esse é um projeto para implementar uma rede social em ReactJs. A ideia é fazer uma rede real, com cadastro, login, posts, likes e comentários, tendo como base o reddit.com. Foi desenvolvido no módulo Front-end do Curso Web Full Stack da Labenu e também foi utilizado redux, axios, styled components e material ui.  
                        </Text>
                        <a href={'https://github.com/nauaramelo/labenu-4eddit-frontend'} target='blank'>
                            <Button>
                                ver no Github
                            </Button>
                        </a>
                    </Infos>
                </Card>
                <Card>
                    <Infos>
                        <TitleCard>
                            LaBook
                        </TitleCard>
                        <CaptionCard>
                            Back-end
                        </CaptionCard>
                        <Text>
                        O LaBook é uma rede social com o objetivo de promover a conexão e interação entre seus mais diversos usuários. Os usuários podem criar posts de dois tipos ("evento" ou "normal), comentá-los e curti-los também. Foi desenvolvido em node, com typeScript, express, knex e utiliza como banco de dados o MYSQL.  
                        </Text>
                        <a href={'https://github.com/nauaramelo/labenu-labook-backend'} target='blank'>
                            <DivButton>
                                <Button>
                                    ver no Github
                                </Button>
                            </DivButton>
                        </a>
                    </Infos>
                    <Memoji src={ipad} title="Labook"/>
                </Card>
                <Card>
                    <Memoji src={imac}/>
                    <Infos>
                        <TitleCard>
                            Spotenu
                        </TitleCard>
                        <CaptionCard>
                            Full Stack
                        </CaptionCard>
                        <Text>
                            O Spotenu é um projeto que visa facilitar o acesso a músicas pelo mundo. Para isso, oferece suporte para dois tipos de usuários: as bandas (ou músicos) e os ouvintes (usuários que consomem as músicas). Além disso, montamos uma operação com funcionários próprios que precisam gerenciar os dados que circulam no nosso sistema. 
                        </Text>
                        <ButtonsCostumers>
                            <a href={'https://github.com/nauaramelo/spotenu-front'} target='blank'>
                                <ButtonFullStack>
                                    front-end no Github
                                </ButtonFullStack>
                            </a>
                            <a href={'https://github.com/nauaramelo/spotenu-back'} target='blank'>
                                <ButtonFullStack>
                                    back-end no Github
                                </ButtonFullStack>
                            </a>
                        </ButtonsCostumers>
                    </Infos>
                </Card>
                <a href={'https://github.com/nauaramelo'} target='blank'>
                    <ButtonAllProjects>
                        mais projetos
                    </ButtonAllProjects>
                </a>
            </Cards>
        </Container>
    )
}