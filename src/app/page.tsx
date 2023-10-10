"use client";
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import Index from "@/components/home/Index";
import { MovieProvider } from "@/components/contexts/movieContext";
import { Sort } from "@/components/sort";
import { auth } from "@/lib/firebase/app";
import User from "./user/page";
import { Login } from "@/components/login";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

import * as SC from "./styles";

export default function Home() {
  const [user, loading] = useAuthState(auth);
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  useEffect(() => {
    if (!loading) {
      setIsAuthLoading(false);
    }
  }, [loading]);

  if (isAuthLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <SC.HomepageContainer>
        <Header />
        {user ? (
          <SC.UserContainer>
            <User />
          </SC.UserContainer>
        ) : (
          <>
            <Login /> <Sort />
            <MovieProvider>
              <Index />
            </MovieProvider>
          </>
        )}
        <Footer />
      </SC.HomepageContainer>
    </>
  );
}
