import Button from "../../components/Button";

import { useEffect, useState } from "react";
import UserProvider from "../../UserProvider";
import UserContext from "../../UserContext";
import Link from "next/link";
import { resumeSubmitText } from "../../utils/resume_submit";
export default function Upload() {
  const [resumeText, setResumeText] = useState();

  return (
    <UserContext.Consumer>
      {(userContext) => {
        return (
          <div className="w-100 text-center">
            <div className="my-10 w-30">
              <h1 className="text-3xl">
                How would you like to upload your resume?{" "}
              </h1>
              <hr className="w-100" />
            </div>
            <div className="w-100 flex flex-row justify-around">
              <div>
                <h1 className="text-2xl"> Write it here!</h1>
                <input
                  type="text"
                  value={resumeText}
                  onChange={(e) => setResumeText(e.target.value)}
                  className="h-80 w-60"
                />
                <Button
                  onClick={() => resumeSubmitText(userContext.user, resumeText)}
                  text="Submit resume"
                />
              </div>

              <div>
                <h1 className="text-2xl"> Upload</h1>
                <p>Coming soon</p>
              </div>
            </div>
          </div>
        );
      }}
    </UserContext.Consumer>
  );
}
