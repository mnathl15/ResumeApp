import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import Button from "../../../components/Button";
import TextEditor from "../../../components/TextEditor";
import ResumeEditor from "../../../components/TextEditor";
import ResumeContext from "../../../ResumeContext";
import UserContext from "../../../UserContext";
import { commentSubmit } from "../../../utils/resume_submit";

const UserResume = (props) => {
  const resumeContext = useContext(ResumeContext);
  const [editorData, setEditorData] = useState({});
  const router = useRouter();
  const [resume, setResume] = useState();
  useEffect(() => {
    try {
      const resumeIdQuery = router.query.resume;
      console.log(resumeContext.getResumeByResumeId(resumeIdQuery));
      setResume(resumeContext.getResumeByResumeId(resumeIdQuery));
    } catch (error) {
      console.log(error);
      console.warn(error);
    }
  }, []);
  return (
    <UserContext.Consumer>
      {(userContext) => {
        return (
          <div className="w-100 h-full">
            {!!resume && (
              <>
                <div className="my-8 text-center ">
                  <h1 className="text-3xl"> Author: {resume.email}</h1>
                  <div
                    className="mx-auto my-12 w-1/4"
                    dangerouslySetInnerHTML={{ __html: resume.text }}
                  />
                </div>

                <div>
                  {!!resume.comments &&
                    resume.comments.map((comment) => {
                      return (
                        <div className="w-2/5 h-72 border-1 border-black flex flex-row ">
                          <p>{comment.author}</p>
                          <p>{comment.text}</p>
                        </div>
                      );
                    })}
                </div>
                <div>
                  <div className="flex flex-col ">
                    <h2>Add new comment</h2>
                    <div className="">
                      <TextEditor
                        setEditorData={(editorData) =>
                          setEditorData(editorData)
                        }
                        width="40%"
                      />
                    </div>
                  </div>

                  <Button
                    text="submit comment"
                    onClick={() =>
                      commentSubmit(
                        userContext.user,
                        editorData,
                        resume.resumeId
                      )
                    }
                  />
                </div>
              </>
            )}
          </div>
        );
      }}
    </UserContext.Consumer>
  );
};

export default UserResume;
