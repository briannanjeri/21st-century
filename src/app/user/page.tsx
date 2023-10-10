"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "@/lib/firebase/app";
import { Cards } from "@/components/userCards";

import * as SC from "./styles";
import { patrickHand, patrickHandSc } from "../../lib/fonts";

const User = () => {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const handleSignOut = async () => {
    await auth.signOut();
    router.push("/");
  };
  return (
    <>
      <SC.AccountContainer>
        <SC.AccountButton className={patrickHand.className}>
          My account
        </SC.AccountButton>
      </SC.AccountContainer>
      <SC.LogoutContainer onClick={handleSignOut}>
        <SC.LogoutButton className={patrickHandSc.className}>
          Logout
        </SC.LogoutButton>
      </SC.LogoutContainer>

      <SC.BrowseContainer>
        <SC.BrowseContent className={patrickHandSc.className}>
          BROWSE MOVIES AND TV SHOWS
        </SC.BrowseContent>
      </SC.BrowseContainer>

      <SC.AddContainer>
        <SC.AddContent className={patrickHandSc.className}>
          ADD NEW MOVIE OR TV SHOWS
        </SC.AddContent>
      </SC.AddContainer>

      <Cards />
    </>
  );
};

export default User;
