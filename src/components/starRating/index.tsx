import { useEffect, useState } from "react";

import * as SC from "./style";

interface starRatingProps {
  currentSlide: number;
  slideIndex: number;
  onRatingChange: (userRating: number) => void;
  initialRating?: number;
}

export const StarRating = ({
  currentSlide,
  slideIndex,
  onRatingChange,
  initialRating,
}: starRatingProps) => {
  const [rating, setRating] = useState(initialRating || 0);
  const [hover, setHover] = useState(0);

  useEffect(() => {
    setRating(initialRating || 0);
  }, [initialRating]);
  if (currentSlide !== slideIndex) return null;
  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <SC.starLabel key={i}>
            <SC.starInput
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => {
                setRating(ratingValue);
                onRatingChange(ratingValue);
              }}
            />
            <SC.starFa
              size={30}
              color={
                ratingValue <= (hover || rating) ? "#ffc107" : "transparent"
              }
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(0)}
            />
          </SC.starLabel>
        );
      })}
    </div>
  );
};
