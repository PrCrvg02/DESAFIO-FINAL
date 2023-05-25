import React, { useState, useEffect } from "react";
import Carousel from 'react-elastic-carousel'
import axios from "axios";
import styled from "styled-components";

const SliderBox = styled.section`
  padding: 2rem;
  
  display: flex;
flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: black;
  color: #ffffff;
`;

const CaroselTitle = styled.h2`
display: flex;
flex-wrap: wrap;
width: 98%;
font-size: 2rem;
color: #ffffff;
background-color: #000000;
`


export default function CaroselComponet() {
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

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  };
  return (
    <SliderBox>
     <CaroselTitle>Últimos lançamentos</CaroselTitle>
      <Carousel itemsToShow={4}>
        {filmes.map((item) => (
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
              alt={item.title}
              style={{ width: "70%" }}
            />
            <h2>{item.title} </h2>
          </div>
        ))} 
      </Carousel>
    </SliderBox>
  );
}