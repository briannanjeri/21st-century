"use client";
import React, { useState, useEffect, createContext } from "react";

import { data } from "./type";
import { getData } from "@/lib/firebase/app";

interface Props {
  children: React.ReactNode;
}

export const MovieContext = createContext<
  [data[], React.Dispatch<React.SetStateAction<data[]>>]
>([[], () => {}]);

export const MovieProvider: React.FC<Props> = (props) => {
  const [movies, setMovies] = useState<data[]>([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const Movies = await getData();
    setMovies(Movies);
  };

  return (
    <div>
      <MovieContext.Provider value={[movies, setMovies]}>
        {props.children}
      </MovieContext.Provider>
    </div>
  );
};
