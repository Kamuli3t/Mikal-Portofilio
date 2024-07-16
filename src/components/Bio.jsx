import React from "react";
import { BIO_CONTENT } from "../constants";
import mikalsprofile from "../assets/mikalsprofile.jpg";

const Bio = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Mikal Afewerki
            </h1>
            <span className="bg-gradient-to-r from-pink-700 via-purple-600 to-blue-600 bg-clip-text text-transparent text-4xl tracking-tight">
              Full Stack Developer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tight text-black">
              I am a passionate full stack developer with a knack for crafting
              robust and scalable web applications. With 5 years of hands-on
              experience, I have honed my skills in front-end technologies like
              React and Next.js, as well as back-end technologies like Node.js,
              SupaBase, PostgreSQL, and MongoDB. My goal is to leverage my
              expertise to create innovative solutions that drive business
              growth and deliver exceptional user experiences.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img src={mikalsprofile} alt="Mikal Afewerki" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
