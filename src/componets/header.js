import React from 'react';
import styled from 'styled-components';
import Logo from '../img/logo.png'
import Iconbuscar from '../img/iconpesquisar.png'
const Headerstyled = styled.header`
width: 100%;
height: 7vh;
display: flex;
justify-content: space-around;
background-color: rgba(108, 122, 137 /1);
  backdrop-filter: blur(15px);
 position: fixed;
z-index: 1;
`
const Divone = styled.div`
display: flex;
justify-content: flex-start;
width: 33%;
background-color: rgba(108, 122, 137 /1);
  backdrop-filter: blur(15px);
`
const Divtwo = styled.div`
display: flex;
justify-content: center;
width: 33%;
background-color: rgba(108, 122, 137 /1);
  backdrop-filter: blur(15px);
`
const Divtree = styled.div`
display: flex;
justify-content: flex-end;
width: 33%;
background-color: rgba(108, 122, 137 /1);
  backdrop-filter: blur(15px);
`
const Ul = styled.ul`
width: 50%;
display: flex;
justify-content: space-evenly;
li{
    list-style: none;
    font-size: 1.2rem;
    color: #ffffff;
    

}li:hover{
width: 113px;
height: 36px;
background: #747474 0% 0% no-repeat padding-box;
box-shadow: 0px 3px 6px #0000005C;
border-radius: 18px;
opacity: 1;
text-align: center;

}
`


export default function Header(){
    return(
        <Headerstyled>
            <Divone><img src={Logo} alt="LOGO DELL" /></Divone>
            <Divtwo>
            <Ul>
                <li>filmes</li>
                <li>series</li>
            </Ul>
            </Divtwo>
          <Divtree>
            <img src={Iconbuscar} alt="ICONE DE PESQUISAR" />
                <Ul>
                     <li>filtro</li>
                     <li>login</li>
                </Ul>
                </Divtree>
        </Headerstyled>
    )
}