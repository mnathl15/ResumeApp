import Button from "../components/Button";

import { useEffect, useState } from "react";
import UserProvider from "../UserProvider";
import UserContext from "../UserContext";
import TopBar from "../components/TopBar";

export default function Home() {
  return (
    <UserContext.Consumer>
      {(userContext) => {
        console.log(userContext);
        return <div></div>;
      }}
    </UserContext.Consumer>
  );
}
