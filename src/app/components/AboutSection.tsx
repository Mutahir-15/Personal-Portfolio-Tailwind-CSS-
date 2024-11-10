import React from "react";
import Image from "next/image";

function AboutSection() {
  return (
    <main>
      <section className="p-10 md:p-20 lg:p-36 xl:p-48 bg-gradient-to-r from-gray-800 to-gray-600 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image Section */}
          <div className="flex justify-center items-center order-first md:order-none">
            <Image
              className="rounded-full shadow-lg"
              src="/images/imgabout.png"
              alt="Profile Image"
              width={500}
              height={500}
            />
          </div>
          {/* Text Section */}
          <div className="flex flex-col justify-center text-left space-y-5">
            <h1 className="text-4xl font-protest-strike font-normal w-full md:text-6xl">About Section</h1>
            <p className="text-lg md:text-2xl my-5">
              Hey there! I'm <span className="text-yellow-200 font-bold">Mutahir Bin Athar</span>, and welcome to my corner of the web. I'm a passionate developer who loves turning ideas into interactive, user-friendly web experiences.
              <br /> With Next.js and React as my trusty tools, I dive into challenges headfirst, always eager to learn and grow. Whether it's coding late into the night or brainstorming new projects, <br /> I'm all about pushing boundaries and creating something special.
              <br /> Let's connect and make something amazing <span className="text-yellow-200 font-bold">together!</span>
            </p>
            <p className="text-2xl italic text-yellow-200">Let's create something amazing together!</p>
            <ul className="list-disc list-inside text-lg md:text-2xl space-y-2">
              <li>Interactive web experiences</li>
              <li>Next.js and React projects</li>
              <li>Continuous learning and growth</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutSection;
