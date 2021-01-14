import Button from "../components/Button";

import { useEffect, useState } from "react";
import UserProvider from "../UserProvider";
import UserContext from "../UserContext";
import Link from "next/link";
export default function TopBar() {
  return (
    <UserContext.Consumer>
      {(userContext) => {
        return (
          <div className="w-100 h-20 flex flex-row justify-around items-center bg-blue-600">
            <div>
              <h1 className="text-2xl text-white">
                {" "}
                <Link href="/home/resumes">Resumes</Link>{" "}
              </h1>
            </div>
            <div>
              <h1 className="text-2xl text-white">
                <Link href="/home/upload-resume">Upload Resume</Link>
              </h1>
            </div>
            <div>
              <h1 className="text-2xl text-white">
                <Link href="/home/account">Account</Link>
              </h1>
            </div>
          </div>
        );
      }}
    </UserContext.Consumer>
  );
}
