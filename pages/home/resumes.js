import { useContext, useEffect, useState } from "react";
import ResumeFrame from "../../components/ResumeFrame";
import ResumeContext from "../../ResumeContext";

export default function Resumes() {
  const resumeContext = useContext(ResumeContext);

  const showResumes = () => {
    try {
      return resumeContext.resumes.map((resume, key) => {
        return <ResumeFrame key={key} resume={resume} />;
      });
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <div className="h-full flex flex-col justify-center">
      <div className="w-4/6 h-4/6 mb-20 overflow-auto  mx-auto flex flex-wrap">
        {!!resumeContext && showResumes()}
      </div>
    </div>
  );
}
