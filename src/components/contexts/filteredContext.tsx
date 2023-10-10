"use client";
import React, { useState, useEffect, createContext } from "react";

import { data } from "./type";
import { getData } from "@/lib/firebase/app";

interface Props {
  children: React.ReactNode;
}

export const filteredContext = createContext<
  [data[], React.Dispatch<React.SetStateAction<data[]>>]
>([[], () => {}]);

export const FilteredProvider: React.FC<Props> = (props) => {
  const [filteredMovies, setFilteredMovies] = useState<data[]>([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const Movies = await getData();
    setFilteredMovies(Movies);
  };

  return (
    <div>
      <filteredContext.Provider value={[filteredMovies, setFilteredMovies]}>
        {props.children}
      </filteredContext.Provider>
    </div>
  );
};
