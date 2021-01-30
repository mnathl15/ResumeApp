import Button from "../../components/Button";

import { useEffect, useState } from "react";
import UserProvider from "../../UserProvider";
import UserContext from "../../UserContext";
import Link from "next/link";
import { resumeSubmitText } from "../../utils/resume_submit";

import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import TextEditor from "../../components/TextEditor";

export default function Upload() {
  const [editorData, setEditorData] = useState({});

  return (
    <UserContext.Consumer>
      {(userContext) => {
        return (
          <div className="w-full text-center h-full overflow-auto">
            <div className="h-5/6 flex flex-col justify-around">
              <div className="my-10 w-30 h-5/6">
                <h1 className="text-3xl">
                  Type/Copy and Paste your resume below!
                </h1>
                <div className="my-10 h-5/6">
                  <TextEditor
                    setEditorData={(editorData) => setEditorData(editorData)}
                    width="60%"
                  />
                </div>
              </div>

              <Button
                onClick={() => resumeSubmitText(userContext.user, editorData)}
                text="Submit resume"
                width="w-72"
              />
            </div>
          </div>
        );
      }}
    </UserContext.Consumer>
  );
}
