import { useEffect, useState } from "react";
import ResumeContext from "./ResumeContext";
import { getResumes } from "./utils/resume_submit";

export default function ResumeProvider(props) {
  const [resumes, setResumes] = useState();

  const getResumeByResumeId = (resumeId) => {
    return resumes.filter((resume) => {
      return resume.resumeId === resumeId;
    })[0];
  };

  useEffect(() => {
    const retrieveResumes = async () => {
      const resumes = await getResumes();
      console.log(resumes);
      setResumes(resumes);
    };
    retrieveResumes();
  }, []);

  return (
    <ResumeContext.Provider
      value={{
        getResumeByResumeId: (resumeId) => getResumeByResumeId(resumeId),
        resumes: resumes,
      }}
    >
      {props.children}
    </ResumeContext.Provider>
  );
}
