import { API } from "aws-amplify";
import { v4 as uuidv4 } from "uuid";

const verifyText = (text) => {
  if (!text) {
    return { success: false, error: "Please enter something" };
  }
  return { success: true, error: "" };
};

export const resumeSubmitText = async (user, editorData) => {
  if (!verifyText(editorData.text).success) {
    return verifyText(editorData.text).error;
  }

  const myInit = {
    body: {
      userId: user.userId,
      resumeId: `resume${uuidv4()}`,
      email: user.email,
      text: editorData.html,
      comments: [],
    },
  };

  const apiData = await API.post("resumeapi", "/sendresumetext", myInit);
  console.log(apiData);
};

export const getResumes = async () => {
  const resumes = await API.get("resumeapi", "/getresumes");
  return resumes.data.Items;
};

export const commentSubmit = async (user, editorData, resumeId) => {
  if (!verifyText(editorData.text).success) {
    return verifyText(editorData.text).error;
  }

  const myInit = {
    body: {
      resumeId: resumeId,
      comments: { author: user.email, text: editorData.text },
    },
  };

  console.log(myInit);
  const apiData = await API.post("resumeapi", "/addcomment", myInit);
  console.log(apiData);
};
