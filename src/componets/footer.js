import React from "react";
import styled from "styled-components";

const NaveButton = styled.nav`
background-color: #000000;
display: flex;
justify-content: center;
align-items: center;
height: 10vh;
gap: 10px;
p{
    color: #ffffff;
    font-size: 1.8rem;
}
`;

const ButtonStyled = styled.button`
border: solid #ffffff;
border-radius: 50%;
width: 3vw;
height: 6vh;
background-color: #000000;
color: #ffffff;
font-size: 1.3rem;
`;
const ButtonUltimo = styled.button`
border: solid #ffffff;
border-radius: 10%;
width: 6vw;
height: 5vh;
background-color: #000000;
color: #ffffff;
font-size: 1.6rem;
`;





export default function Footer(){
    return(
        <NaveButton>
        
            <ButtonStyled>1</ButtonStyled>
            <ButtonStyled>2</ButtonStyled>
            <ButtonStyled>3</ButtonStyled>
            <ButtonStyled>4</ButtonStyled>
            <p>...</p>
            <ButtonUltimo>Ultimo</ButtonUltimo>
        
    </NaveButton>
    )
}