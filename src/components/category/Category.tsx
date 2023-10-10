"use client";
import React, { useState, useEffect, useContext } from "react";

import { MovieContext } from "../contexts/movieContext";
import { filteredContext } from "../contexts/filteredContext";

import { patrickHand } from "@/lib/fonts";
import * as SC from "./style";

const movieButtons = [
  { id: 1, title: "Sci-FI" },
  { id: 2, title: "Action" },
  { id: 3, title: "comedy" },
  { id: 4, title: "Rom-Com" },
  { id: 5, title: "Romance" },
  { id: 6, title: "drama" },
  { id: 7, title: "Horror" },
];

const Category = () => {
  const [movies, setMovies] = useContext(MovieContext);
  const [filteredMovies, setFilteredMovies] = useContext(filteredContext);

  const [isFiltered, setIsFiltered] = useState(false);
  const [activeButton, setActiveButton] = useState({ id: 0, title: "" });

  function handleMovieButtonClick(clickedButton: {
    id: number;
    title: string;
  }) {
    setActiveButton(clickedButton);
    if (clickedButton.id === activeButton.id)
      setActiveButton({ id: 0, title: "" });
  }

  function checkIsButtonActive(id: number) {
    if (activeButton.id === 0) return true;
    return id === activeButton.id;
  }

  useEffect(() => {
    if (activeButton.title !== "") {
      const filteredData = movies.filter((movie) =>
        movie.categories.includes(activeButton.title)
      );
      setFilteredMovies(filteredData);
      setIsFiltered(true);
      return;
    }
    setFilteredMovies(movies);
    setIsFiltered(false);
  }, [activeButton, movies, setFilteredMovies]);

  return (
    <SC.categoriesContainer>
      {movieButtons.map((button) => (
        <SC.categoriesWrapper
          key={button.id}
          onClick={() => handleMovieButtonClick(button)}
          style={{
            opacity: checkIsButtonActive(button.id) ? 1 : "0.3",
          }}
          className={patrickHand.className}
        >
          {button.title}
        </SC.categoriesWrapper>
      ))}
    </SC.categoriesContainer>
  );
};

export default Category;
