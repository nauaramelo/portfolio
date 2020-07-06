import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 418px;
    background-color: #0d0d0d;
`

const Title = styled.div`
    width: 154px;
    height: 30px;
    font-family: Montserrat;
    font-size: 25px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.15px;
    text-align: center;
    color: #ffffff;
`
const Caption = styled.div`
    width: 218px;
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

const Text = styled.div`
    width: 247px;
    height: 133px;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.22px;
    color: #ffffff;
`
const Front = styled.div`

`
const Back = styled.div`
    
`
const FrontBack = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;    
`

export const OQueFaco = () => {

    return (
        <Container>
            <Title>
                O que faço? 
            </Title>
            <FrontBack>
                <Front>
                    <Caption>
                        Front-end
                    </Caption>
                    <Text>
                        Desenvolvimento de aplicações web utilizando HTML, CSS e JavaScript.

                        Criação de sites responsivos seguindo princípio de Mobile First.
                    </Text>
                </Front>
                <Back>
                    <Caption>
                        Back-end
                    </Caption>
                    <Text>
                        Aplicações utilizando NodeJS, Typescript e MySQL.

                        Criação de API´s para comunicação com front-end seguindo princípio de Clean Code.
                    </Text>
                </Back>
            </FrontBack>
        </Container>
    )
}