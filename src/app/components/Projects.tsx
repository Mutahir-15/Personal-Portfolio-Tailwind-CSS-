import React from "react";
import Image from "next/image";
import Link from "next/link";

function Projects() {
  return (
    <main>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10 md:p-20 lg:p-32 xl:p-40">
        {/* Text Section */}
        <div className="flex flex-col justify-center text-left space-y-5">
          <h1 className="text-4xl font-protest-strike font-normal w-full md:text-6xl">Projects</h1>
          <p className="text-2xl">
          Welcome to my projects showcase!<br /> Here you'll find a selection of my recent work, including a sophisticated BMI calculator, <br />
          and an engaging number guessing game, both built with TypeScript. I've also created a sleek static resume page using HTML and CSS.<br />
          These projects reflect my skills and creativity in web development. Explore and enjoy!
          </p>
        </div>
        {/* Image Section */}
        <div className="flex justify-center items-center">
          <Image
            src="/images/projects.png"
            alt="Projects Image"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Project Cards */}
      <div className=" mb-10 flex flex-wrap justify-center gap-10 mt-10">
        <div className="box w-80 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
          <div>
            <Image
              src={"/images/resume.png"}
              alt="Resume Image"
              width={500}
              height={500}
              className="rounded-t-lg"
            />
          </div>
          <div className="box-content p-5">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Static-Resume HTML & CSS</h3>
            <p className="text-gray-600">
              I created a static resume project using HTML and CSS, showcasing a clean, simple layout with essential details. Designed to offer a quick overview of professional achievements.
            </p>
            <button className="bg-[#344e41] text-white rounded-md mt-4 px-4 py-2 transition-transform transform hover:bg-[#432818] hover:scale-105">
              <Link href="/resume">Take a Look</Link>
            </button>
          </div>
        </div>

        <div className="box w-80 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
          <div>
            <Image
              src={"/images/calculator.jpeg"}
              alt="Calculator Image"
              width={500}
              height={500}
              className="rounded-t-lg"
            />
          </div>
          <div className="box-content p-5">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">CLI-Based Simple Calculator</h3>
            <p className="text-gray-600">
              Created a CLI-based Simple Calculator for basic arithmetic operations (addition, subtraction, multiplication, division) with user input directly via the command-line.
            </p>
            <button className="bg-[#344e41] text-white rounded-md mt-4 px-4 py-2 transition-transform transform hover:bg-[#432818] hover:scale-105">
              <Link href="/calculator">Take a Look</Link>
            </button>
          </div>
        </div>

        <div className=" w-80 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
          <div>
            <Image
              src={"/images/game.png"}
              alt="Game Image"
              width={500}
              height={500}
              className="rounded-t-lg"
            />
          </div>
          <div className="box-content p-5">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">CLI-Number Guessing Game</h3>
            <p className="text-gray-600">
              A fun and challenging CLI-based number guessing game! Players must guess the hidden number with no hints at all. Test your luck and see how quickly you can get it right!
            </p>
            <button className="bg-[#344e41] text-white rounded-md mt-4 px-4 py-2 transition-transform transform hover:bg-[#432818] hover:scale-105">
              <Link href="/game">Take a Look</Link>
            </button>
          </div>
        </div>

        <div className="box w-80 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
          <div>
            <Image
              src={"/images/bmi.png"}
              alt="BMI Image"
              width={500}
              height={500}
              className="rounded-t-lg"
            />
          </div>
          <div className="box-content p-5">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">CLI-Based BMI Calculator</h3>
            <p className="text-gray-600">
              Created an application where you can enter your weight in KG and height in meters to get your BMI calculated instantly. An easy and fast way to track your fitness and health on the go!
            </p>
            <button className="bg-[#344e41] text-white rounded-md mt-4 px-4 py-2 transition-transform transform hover:bg-[#432818] hover:scale-105">
              <Link href="/bmi-calculator">Take a Look</Link>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Projects;
