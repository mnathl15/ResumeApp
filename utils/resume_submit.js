import { API } from "aws-amplify";

const verifyText = (text) => {
  if (!text) {
    return { success: false, error: "Please enter something" };
  }
  return { success: true, error: "" };
};

export const resumeSubmitText = async (user, text) => {
  if (!verifyText(text).success) {
    return verifyText(text).error;
  }

  console.log(user);
  const myInit = {
    body: {
      userId: user.userId,
      email: user.email,
      text: text,
    },
  };

  const apiData = await API.post("resumeapi", "/sendresumetext", myInit);
  console.log(apiData);
};

export const getResumes = async () => {
  const resumes = await API.get("resumeapi", "/getresumes");
  return resumes.data.Items;
};
