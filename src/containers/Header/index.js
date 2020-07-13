import React, { useEffect, useState } from 'react';
import styled from "styled-components";

const Headers = styled.header`
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    bottom: 0;  
    right: 0;
    left: 0;
    background: #ffff; 
`
const Name = styled.div`
    padding-left: 2vh;
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
    width: 83px;
    height: 19px;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.22px;
    text-align: center;
    color: ${props => !props.isActive ? '#377d8c' : '#bf3c3b'};
    background-color: transparent;
    border: none;
    cursor: pointer;
`

const Buttons = styled(ButtonQuemSou)`
    width: 64px;
`
const containers = {
    containerQuemSouId: 'SobreMim',
    containerProjetosId: 'Projeto',
    containerContatoId: 'Contato'
}

export const Header = (props) => {
    const [state, setState] = useState({
        botaoAtivo: 'SobreMim'
    })

    const isInViewport = (idContainer) => {
        const box = document.getElementById(idContainer);
        const rect = box.getBoundingClientRect();

        const isInViewport = rect.top <= (window.innerHeight || window.document.documentElement.clientHeight) &&
            rect.bottom >= 0
 
        return isInViewport
    }



    const handleScroll = () => {
        for (let key in containers) {
            if (isInViewport(containers[key])) {
                setState({ botaoAtivo: containers[key] })
            }
        }

    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, [])

    return (
        <Headers>
            <Name>
                nauaramelo
            </Name>
            <DivButtons>
                <a href='#SobreMim' >
                    <ButtonQuemSou isActive={state.botaoAtivo === 'SobreMim'}>
                        quem sou
                    </ButtonQuemSou>
                </a>
                <a href='#Projeto'>
                    <Buttons isActive={state.botaoAtivo === 'Projeto'}>
                        projetos
                    </Buttons>
                </a>
                <a href='#Contato'>
                    <Buttons isActive={state.botaoAtivo === 'Contato'}>
                        contato
                    </Buttons>
                </a>
            </DivButtons>
        </Headers>
    )
}