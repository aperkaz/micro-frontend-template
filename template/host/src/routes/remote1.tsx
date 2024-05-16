import React from "react";
import Navbar from "../components/Navbar";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const Remote1 = React.lazy(() => import("remote1/Remote1"));

function About() {
  return (
    <div className="min-h-full">
      <Navbar />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="mt-6 text-lg leading-8 ">
          The component below is loaded from a remote.
        </p>
      </div>
      <React.Suspense fallback={<div>loading remote modules...</div>}>
        <Remote1 src="https://www.thelabradorsite.com/wp-content/uploads/2015/07/black-lab-puppy.jpg" />
      </React.Suspense>
      <div></div>
    </div>
  );
}

export default About;
