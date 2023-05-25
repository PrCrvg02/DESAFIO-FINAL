import React, { useState, useEffect } from "react";
import Pesquisa from "../img/iconpesquisar.png"
import axios from "axios";
import styled from "styled-components";

const FilmesConteiner = styled.section`
display: flex;
flex-wrap: wrap;
background-color: #000000;
justify-content: space-around;
div{
    margin-bottom: 2rem;
}
img{
    width: 70%;
}
h2{
    color: #ffffff;
}
`

const FilmesBox = styled.section`
background-color: #000000;
`

const FilmesTitle = styled.h2`
font-size: 2rem;
color: #ffffff;
background-color: #000000;
padding: 2rem;
`
const Navstyled = styled.nav`
display: flex;
background-color: #000000;
height: 6vh;
align-items: center;
ul{
    display: flex;
    justify-content: space-evenly;
    width: 90%;
}
li{
    list-style: none;
    font-size: 1.5rem;
    color: #ffffff;
}
`

const Navbar = () =>(
    <Navstyled>
        <ul>
            <li>Popular</li>
            <li>Drama</li>
            <li>Ação</li>
            <li>Aventura</li>
            <li>Comedía</li>
            <li>Crime</li>
            <li>Fantasia</li>
            <li>Familia</li>
            <li><img src={Pesquisa} alt="figuralogo" /></li>
        </ul>
    </Navstyled>
) 

export default function Filmes() {
  const [filmes, setFilmes] = useState([]);

  const getApi = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=34635a3c54d72514d08fd6979b14e222&language=pt-Br&page=1"
      )
      .then((response) => {
        setFilmes(response.data.results);
      });
  };

  useEffect(() => {
    getApi();
  }, []);

  
  return (
 <FilmesBox>
    <Navbar/>
 <FilmesTitle>Em Alta</FilmesTitle>
 <FilmesConteiner>
    {filmes.map((item) => ( 
        <div>
            <img
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                alt={item.title}/>
                <h2>{item.title}</h2>
        </div>
    ))}
    </FilmesConteiner>
 </FilmesBox>
  );
}