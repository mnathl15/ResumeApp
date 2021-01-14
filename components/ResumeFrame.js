import Link from "next/link";

export default function ResumeFrame({ user }) {
  return (
    <Link href="/home/resumes/test">
      <div className=" flex-1 ">
        <div className="w-72 h-72 border-2 border-blue-600 mx-auto flex flex-col justify-between ">
          <div>&nbsp;</div>
          <div>Lorem Ipsum...................</div>
          <div className="w-2/2 h-10 leading-10 bg-blue-200 ">
            <h2 className="align-middle">Author: john@email.com</h2>
          </div>
        </div>
      </div>
    </Link>
  );
}
