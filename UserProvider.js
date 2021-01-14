import UserContext from "./UserContext";
import { Component, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Amplify, { Auth, Hub } from "aws-amplify";
import awsconfig from "./src/aws-exports";
import { validateSignUp } from "./utils/validate";

Amplify.configure(awsconfig);

export default function UserProvider(props) {
  const [user, setUser] = useState({});

  const router = useRouter();
  useEffect(() => {
    Auth.currentUserInfo().then((user) => {
      console.log(user);
      if (!!user) {
        _setUser(user);
      }
    });
  }, []);

  const signUp = async (email, password) => {
    if (!validateSignUp(email, password)) return;
    try {
      const { user } = await Auth.signUp({
        username: email,
        password: password,
      });
      _setUser(user);
    } catch (error) {
      console.log("error signing up:", error);
    }
  };

  const _setUser = (user) => {
    setUser({ email: user.attributes.email, userId: user.attributes.sub });
  };

  const logIn = async (email, password) => {
    try {
      const user = await Auth.signIn(email, password);
      _setUser(user);
    } catch (error) {
      console.log("error signing up:", error);
    }
  };

  useEffect(() => {
    console.log(user);
    if (!!user) {
      // router.push("/home");
    }
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        logIn: (email, password) => logIn(email, password),
        signUp: (email, password) => signUp(email, password),
        user: user,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
