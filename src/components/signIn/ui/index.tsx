import React from "react";

import { SignIn } from "@/components/signIn/logic";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

import { patrickHand } from "@/lib/fonts";
import * as SC from "./styles";

export const SignInWith = () => {
  const handleSignIn = SignIn();
  return (
    <>
      <SC.LoginPage>
        <Header />
        <SC.LoginContainer>
          <SC.LoginWithGoogleContainer>
            <SC.LoginWithGoogle
              onClick={() => handleSignIn("google")}
              className={patrickHand.className}
            >
              Login with Google
            </SC.LoginWithGoogle>
          </SC.LoginWithGoogleContainer>

          <SC.LoginWithFacebookContainer>
            <SC.LoginWithFacebook
              className={patrickHand.className}
              onClick={() => handleSignIn("facebook")}
            >
              Login with Facebook
            </SC.LoginWithFacebook>
          </SC.LoginWithFacebookContainer>

          <SC.LoginWithTwitterContainer>
            <SC.LoginWithTwitter
              className={patrickHand.className}
              onClick={() => handleSignIn("twitter")}
            >
              Login with Twitter
            </SC.LoginWithTwitter>
          </SC.LoginWithTwitterContainer>

          <SC.LoginWithGithubContainer>
            <SC.LoginWithGithub
              className={patrickHand.className}
              onClick={() => handleSignIn("github")}
            >
              Login with GitHub
            </SC.LoginWithGithub>
          </SC.LoginWithGithubContainer>
        </SC.LoginContainer>
      </SC.LoginPage>
      <Footer />
    </>
  );
};
