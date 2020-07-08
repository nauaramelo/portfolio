import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 50px;
    background-color: #000000;
    display: flex;
    align-items: center; 
`

const Text = styled.div`
    /* width: 119px; */
    margin-left: 2vh;
    height: 22px;
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

export const Footer = () => {

    return (
        <Container>
            <Text>
                © 2020 nauaramelo
            </Text>
        </Container>
    )
}