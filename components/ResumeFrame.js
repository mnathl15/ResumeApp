import Link from "next/link";

export default function ResumeFrame({ resume }) {
  return (
    <Link href="/home/resumes/[resume]" as={`/home/resumes/${resume.resumeId}`}>
      <div className="flex-2-row my-5">
        <div className="w-72 h-72 border-2 border-blue-600 mx-auto flex flex-col justify-between ">
          <div>&nbsp;</div>
          <div dangerouslySetInnerHTML={{ __html: resume.text }} />
          <div className="w-2/2 h-10 leading-10 bg-blue-200 ">
            <h2 className="align-middle">Author: {resume.email}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
}
