import { useRouter } from "next/navigation";
import {
  useSignInWithGoogle,
  useSignInWithGithub,
  useSignInWithTwitter,
  useSignInWithFacebook,
} from "react-firebase-hooks/auth";

import { auth, createUser } from "@/lib/firebase/app";

export const SignIn = () => {
  const router = useRouter();
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signInWithGithub] = useSignInWithGithub(auth);
  const [signInWithTwitter] = useSignInWithTwitter(auth);
  const [signInWithFacebook] = useSignInWithFacebook(auth);

  const handleSignIn = async (provider: string) => {
    if (provider === "google") {
      const result = await signInWithGoogle();
      if (result) {
        const { user } = result;
        const userDocRef = await createUser(user);
      }
    } else if (provider === "github") {
      const result = await signInWithGithub();
      if (result) {
        const { user } = result;
        const userDocRef = await createUser(user);
      }
    } else if (provider === "twitter") {
      const result = await signInWithTwitter();
      if (result) {
        const { user } = result;
        const userDocRef = await createUser(user);
      }
    } else if (provider === "facebook") {
      const result = await signInWithFacebook();
      if (result) {
        const { user } = result;
        const userDocRef = await createUser(user);
      }
    }
    router.push("/");
  };
  return handleSignIn;
};
