import React from 'react';
import styled from "styled-components";
import memoji from './memoji.png';  
import cvnauaramelo from './cvnauaramelo.pdf';

const Container = styled.div`
    width: 100%;
    height: 438px;
    background-color: #377d8c;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Title = styled.div`
    width: 238px;
    height: 52px;
    font-family: Montserrat;
    font-size: 42px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.32px;
    color: #ffffff;
    text-align: initial;
    padding-bottom: 2.5vh;
`
const Memoji = styled.img`
    width: 189px;
    height: 292px;
    object-fit: contain;
`
const Text = styled.div`
    width: 368px;
    height: 122px;
    font-family: Roboto;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.16px;
    color: #ffffff;
    text-align: justify;
`
const Button = styled.button`
    width: 140px;
    height: 30px;
    border-radius: 8px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    background-color: #bf3c3b;
    margin-top: 10px; 
`
const Tecnologias = styled.div`
    display: flex; 

`
const Tecs = styled.div`
/*     width: 60px; */
    height: 30px;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.28px;
    color: #ffffff;
    padding-left: 1vh;
`
const Block = styled.div`
    padding-right: 1vh;
    display: inherit;
`

const Divider = styled.div`
    width: 3px;
    height: 14px;
    background-color: #ffffff;
`

const Infos = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 80px;
`


export const SobreMim = (props) => {

    function download() {
        var iframe = document.getElementById('invisible');
        iframe.src = cvnauaramelo;
    }

    return (
        <Container>
            <div>
            <Memoji src={memoji} />
            </div>
            <Infos>
                <Title>
                    Sobre mim
                </Title>
                <Text>
                    Apesar da formação em Administração e em Relações Públicas, sempre me vi perto da tecnologia, seja no ambiente de trabalho ou na atuação, tendo experiência como analista de projetos. Até que tive a oportunidade de estudar programação e não consegui mais ficar longe. Conclui o Curso de Desenvolvimento Full Stack da Labenu e estou em transição de carreira, com uma vontade imensa de aprender mais e sempre. 
                </Text>
                <Tecnologias>
                    <Block>
                        <Divider/> 
                        <Tecs> NodeJs </Tecs>
                    </Block>
                    <Block>
                        <Divider/> 
                        <Tecs> MYSQL </Tecs>
                    </Block>
                    <Block>
                        <Divider/> 
                        <Tecs> React </Tecs>
                    </Block>
                    <Block>
                        <Divider/> 
                        <Tecs> TypeScript </Tecs>
                    </Block>
                </Tecnologias>
                <a href={cvnauaramelo} target="blank">              
                    <Button >
                        CV EM PDF
                    </Button>
                </a> 
            </Infos>
        </Container>
    )

}