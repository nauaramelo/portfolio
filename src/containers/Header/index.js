import React from 'react';
import styled from "styled-components";


const Headers = styled.header`
    /* width: 1280px; */
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 2vh;
    margin-left: 2vh;
`
const Name = styled.div`
    display: flex;
    align-items: center;
    width: 100px;
    height: 25px;
    font-family: Montserrat;
    font-size: 21px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.28px;
    color: #377d8c;
`;

const DivButtons = styled.div`
    display: flex;
    justify-content: flex-end;
`

const ButtonQuemSou = styled.button`
    width: 80px;
    height: 19px;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.22px;
    text-align: center;
    color: #bf3c3b;
    background-color: transparent;
    border: none;
`

const Buttons = styled.button`
    width: 64px;
    height: 19px;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.22px;
    text-align: center;
    color: #377d8c;
    background-color: transparent;
    border: none;
`

export const Header = (props) => {
    
    return (
        <Headers>
            <Name>
                nauaramelo 
            </Name>
            <DivButtons>
                <ButtonQuemSou>
                    quem sou
                </ButtonQuemSou>
                <Buttons>
                    projetos
                </Buttons>
                <Buttons>
                    contato
                </Buttons>
            </DivButtons>
        </Headers>
    )
}