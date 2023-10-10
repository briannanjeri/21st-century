"use client";
import React from "react";

import Button from "../button/Button";
import Category from "../category/Category";
import Cards from "../cards/Cards";
import { FilteredProvider } from "../contexts/filteredContext";

import * as SC from "./style";

const Index = () => {
  return (
    <>
      <SC.homeContainer>
        <FilteredProvider>
          <Button />
          <Category />
          <Cards />
        </FilteredProvider>
      </SC.homeContainer>
    </>
  );
};

export default Index;
