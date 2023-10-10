import { useState, useEffect, useContext } from "react";
import { MovieContext } from "../contexts/movieContext";
import { filteredContext } from "../contexts/filteredContext";

import { patrickHandSc } from "@/lib/fonts";
import * as SC from "./style";

const movieButtons = [
  { id: 1, title: "Movies" },
  { id: 2, title: "tv-show" },
];

const Button = () => {
  const [movies, setMovies] = useContext(MovieContext);
  const [isFiltered, setIsFiltered] = useState(false);

  const [filteredMovies, setFilteredMovies] = useContext(filteredContext);
  const [activeButton, setActiveButton] = useState({ id: 0, title: "" });

  const handleButtonClicked = (clickedButton: {
    id: number;
    title: string;
  }) => {
    setActiveButton(clickedButton);
    if (clickedButton.id == activeButton.id) {
      setActiveButton({ id: 0, title: "" });
    }
  };

  const checkIsButtonActive = (button: { id: number; title: string }) => {
    if (activeButton.id == button.id) return true;
    return activeButton.id == 0;
  };

  useEffect(() => {
    if (activeButton.title !== "") {
      const filteredData = movies.filter(
        (movie) => movie.type == activeButton.title
      );
      setFilteredMovies(filteredData);
      setIsFiltered(true);
      return;
    }
    setFilteredMovies(movies);
    setIsFiltered(false);
  }, [activeButton, movies, setFilteredMovies]);

  return (
    <SC.buttonContainer>
      {movieButtons.map((button) => (
        <SC.buttonWrapper
          key={button.id}
          onClick={() => handleButtonClicked(button)}
          style={{ opacity: checkIsButtonActive(button) ? 1 : "0.3" }}
          className={patrickHandSc.className}
        >
          {button.title}
        </SC.buttonWrapper>
      ))}
    </SC.buttonContainer>
  );
};

export default Button;
