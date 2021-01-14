import Head from "next/head";

import Amplify from "aws-amplify";
import awsExports from "../src/aws-exports.js";

Amplify.configure(awsExports);

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      sd
    </div>
  );
}
