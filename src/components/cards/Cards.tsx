"use client";
import React, { useContext, useState } from "react";

import { MovieContext } from "../contexts/movieContext";
import { filteredContext } from "../contexts/filteredContext";
import Card from "../card/Card";

import { patrickHand } from "@/lib/fonts";
import * as SC from "./style";

const Cards = () => {
  const [movies, setMovies] = useContext(MovieContext);
  const [filteredMovies, setFilteredMovies] = useContext(filteredContext);

  return (
    <SC.cardsContainer>
      {filteredMovies.length > 0 ? (
        filteredMovies.map((movie) => (
          <div key={movie.id}>
            <Card movie={movie} />
          </div>
        ))
      ) : (
        <SC.errorWrapper className={patrickHand.className}>
          NO Movies Found Based On This Category
        </SC.errorWrapper>
      )}
    </SC.cardsContainer>
  );
};

export default Cards;
