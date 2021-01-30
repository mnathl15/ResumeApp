import Head from "next/head";
import UserProvider from "../UserProvider";
import { useRouter } from "next/router";
import UserContext from "../UserContext";
import TopBar from "../components/TopBar";
import ResumeProvider from "../ResumeProvider";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <div className="bg-blue-50 h-screen p-0 m-0 overflow-hidden">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/static/style.css" />
        <link rel="stylesheet" href="/static/resume-editor.css" />
      </Head>
      <UserProvider>
        <ResumeProvider>
          <UserContext.Consumer>
            {(userContext) => {
              return (
                <>
                  {/* {!!userContext.user && <TopBar />} */}

                  {<TopBar />}
                  <Component {...pageProps} />
                </>
              );
            }}
          </UserContext.Consumer>
        </ResumeProvider>
      </UserProvider>
    </div>
  );
}
