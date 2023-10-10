import React from "react";
import Image from "next/image";

import { MovieProp } from "../contexts/type";

import { patrickHand, patrickHandSc } from "@/lib/fonts";
import * as SC from "./style";

const Card = ({ movie }: MovieProp) => {
  const num = 0;
  const rating = 10;
  return (
    <div>
      <SC.imageWrapper>
        <Image
          src={movie.image}
          alt={movie.title}
          width={230}
          height={344.41}
        />
        <SC.imageOverlay />
        <SC.attributeContainer>
          <SC.attributesWrapper className={patrickHand.className}>
            <div>UserRating</div>
            <div>Category</div>
            {movie.categories.map(
              (category, index) =>
                index > num && (
                  <div key={index}>
                    <p></p>
                  </div>
                )
            )}
            <div>Availability</div>
            {movie.Availability.map(
              (category, index) =>
                index > num && (
                  <div key={index}>
                    <p></p>
                  </div>
                )
            )}
            <div>Type</div>
          </SC.attributesWrapper>
          <SC.attributesValuesWrapper className={patrickHandSc.className}>
            <div>
              {movie.rating}/{rating}
            </div>
            {movie.categories.map((category, index) => (
              <div key={index}>{category}</div>
            ))}
            {movie.Availability.map((a, index) => (
              <div key={index}>{a}</div>
            ))}
            <div>{movie.type}</div>
          </SC.attributesValuesWrapper>
        </SC.attributeContainer>
        <SC.titleWrapper className={patrickHand.className}>
          {movie.title}
        </SC.titleWrapper>
      </SC.imageWrapper>
    </div>
  );
};

export default Card;
