import React from 'react';
import Avatar from "../img/avatar.png"
import styled from 'styled-components';


const Mainstyled = styled.main`
background-image:url(${Avatar});
background-size: cover;
background-position: center;
width: 100%;
height: 80vh;
display: flex;
align-items: flex-end;
justify-content: center;
font-family: Arial;

`
 const Mainconte = styled.div`
  width: 90%;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    color: #ffffff;
h2{
   color: #ffffff;
   font-size: 2rem;
}
p{
    width: 50%;
    font-size: 1.5rem;
}
 
 `
const Buttonassitir = styled.button`
width: 12vw;
height: 5vh;
border-radius: 10px;
color: #ffffff;
font-size: 1.2rem;
border: none;
background-color: #D53A00;
`
const Buttonatrailer = styled.button`
width: 12vw;
height: 5vh;
border-radius: 10px;
color: #f2f2f2f2;
font-size: 1.2rem;
border: none;
background-color: #717171;
`





export default function Main (){
 return(
    <Mainstyled>
        <Mainconte>
 <h2>Avatar: o Caminho da Água</h2>
 <h3>3hr 23 min | Fantasia, Família | 2023</h3>
 <h4>9,9</h4>
 <p>Após formar uma família, Jake Sully e Ney'tiri fazem de tudo para ficarem juntos. No entanto, eles devem sair de casa e explorar as regiões de Pandora quando uma antiga ameaça ressurge, e Jake deve travar uma guerra difícil contra os humanos.</p>
 <div>
    <Buttonassitir>Assitir agora</Buttonassitir>
    <Buttonatrailer>Trailer</Buttonatrailer>
 </div>
 
 </Mainconte>
    </Mainstyled>
 )
}

