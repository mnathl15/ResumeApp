import { useEffect, useState } from "react";
import ResumeFrame from "../../components/ResumeFrame";
import UserContext from "../../UserContext";
import { getResumes } from "../../utils/resume_submit";
import Link from "next/link";

export default function Resumes() {
  const [resumes, setResumes] = useState();

  useEffect(() => {
    const retrieveResumes = async () => {
      const resumes = await getResumes();
      setResumes(resumes);
    };
    retrieveResumes();
  }, []);

  const showResumes = () => {
    return resumes.map((resume, key) => {
      return <ResumeFrame key={key} user={resume} />;
    });
  };

  return (
    <UserContext.Consumer>
      {(userContext) => {
        return (
          <div className="w-100 flex flex-wrap py-5 ">
            {!!resumes && showResumes()}
          </div>
        );
      }}
    </UserContext.Consumer>
  );
}
