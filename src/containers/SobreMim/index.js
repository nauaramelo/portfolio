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
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.16px;
    color: #ffffff;
    text-align: initial;
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident,
                    sunt in cupidatatlpa qui officia deserunt mollit anim id est laborum.
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