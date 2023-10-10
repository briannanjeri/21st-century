import { useState, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";

import { StarRating } from "../starRating";
import data from "@/lib/utils/code.json";
import { getAuth } from "firebase/auth";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/app";
import rightIcon from "public/rightIcon.png";
import leftIcon from "public/leftIcon.png";

import { patrickHand } from "@/lib/fonts";
import * as SC from "./style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Cards = () => {
  const auth = getAuth();
  const userId = auth.currentUser?.uid;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [userRatings, setUserRatings] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    // Retrieve the user's ratings from Firestore when the component mounts
    const getUserRatings = async () => {
      if (!userId) return;

      const userDocRef = doc(db, "users", userId);
      const userSnapshot = await getDoc(userDocRef);
      if (userSnapshot.exists()) {
        const userData = userSnapshot.data();
        const ratings = userData.ratings || [];
        const ratingsObject: { [key: string]: number } = {};
        ratings.forEach(
          (rating: { movieTitle: string; userRating: number }) => {
            ratingsObject[rating.movieTitle] = rating.userRating;
          }
        );
        setUserRatings(ratingsObject);
      }
    };

    getUserRatings();
  }, [userId]);

  const handleRating = async (movieTitle: string, userRating: number) => {
    // Update the user's document in Firestore with the new rating
    if (!userId) {
      console.log("error: userId is undefined");
      return;
    }
    const userDocRef = doc(db, "users", userId);
    const userSnapshot = await getDoc(userDocRef);
    if (!userSnapshot.exists()) {
      const ratings = [{ movieTitle, userRating }];
      const createdAt = new Date();

      try {
        await setDoc(userDocRef, {
          ratings,
          createdAt,
        });
      } catch (error: any) {
        console.log("Error creating user", error.message);
      }
    } else {
      // Update the existing user document with the new rating
      const userData = userSnapshot.data();
      const ratings = userData.ratings || [];
      const movieIndex = ratings.findIndex(
        (rating: { movieTitle: string; userRating: number }) =>
          rating.movieTitle === movieTitle
      );
      if (movieIndex > -1) {
        // Update the existing rating for the movie
        ratings[movieIndex].userRating = userRating;
      } else {
        // Add a new rating for the movie
        ratings.push({ movieTitle, userRating });
      }

      try {
        await updateDoc(userDocRef, { ratings });
      } catch (error: any) {
        console.log("Error updating user", error.message);
      }
    }
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    centerMode: true,
    centerPadding: "0px",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (oldIndex: number, newIndex: number) =>
      setCurrentSlide(newIndex),
  };

  return (
    <>
      <SC.MoviesContainer>
        <Slider {...settings}>
          {data.map((movie, index) => (
            <SC.MoviesCard key={movie.title}>
              <SC.MoviesWrapper
                style={{ padding: "20px" }}
                isCurrentSlide={index === currentSlide}
              >
                <SC.ImageContainer>
                  <Image src={movie.image} alt="" width={400} height={500} />
                </SC.ImageContainer>

                <SC.ImageDesc className={patrickHand.className}>
                  {movie.title}
                </SC.ImageDesc>
                <StarRating
                  currentSlide={currentSlide}
                  slideIndex={index}
                  onRatingChange={(userRating) =>
                    handleRating(movie.title, userRating)
                  }
                  initialRating={userRatings[movie.title]}
                />
              </SC.MoviesWrapper>
            </SC.MoviesCard>
          ))}
        </Slider>
      </SC.MoviesContainer>
    </>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      style={{
        position: "absolute",
        top: "40%",
        left: "320px",
        zIndex: 1,
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <Image src={leftIcon} alt="" width={30} height={30} />
    </div>
  );
};

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      style={{
        position: "absolute",
        top: "40%",
        right: "313px",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <Image src={rightIcon} alt="" width={30} height={30} />
    </div>
  );
};
