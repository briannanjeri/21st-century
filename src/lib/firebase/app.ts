import { getApp, getApps, initializeApp } from "firebase/app";
import {
  getAuth,
  GithubAuthProvider,
  TwitterAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  getDocs,
  collection,
} from "firebase/firestore";

import { data } from "@/components/contexts/type";

const firebaseConfig = {
  apiKey: "AIzaSyBooYb_vdPDsB57feNC46ITIjHzAc4AdRw",
  authDomain: "century-movies.firebaseapp.com",
  projectId: "century-movies",
  storageBucket: "century-movies.appspot.com",
  messagingSenderId: "206164699749",
  appId: "1:206164699749:web:5a03e114c28d08552e348c",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const githubAuthProvider = new GithubAuthProvider();
const twitterAuthProvider = new TwitterAuthProvider();
const facebookAuthProvider = new FacebookAuthProvider();

const db = getFirestore(app);

const createUser = async (userAuth: any) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error: any) {
      console.log("Error creating user", error.message);
    }
  }
  return userDocRef;
};

export async function getData() {
  try {
    const querySnapshot = await getDocs(collection(db, "Movies"));
    console.log('query',querySnapshot)
    const movies: data[] = [];
    querySnapshot.docs.forEach((doc) =>
      movies.push({ id: doc.id, ...doc.data() } as data)
    );

    return movies;
  } catch (error) {
    return [];
  }
}

export {
  app,
  db,
  createUser,
  auth,
  githubAuthProvider,
  twitterAuthProvider,
  facebookAuthProvider,
};
