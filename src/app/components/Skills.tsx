import React from 'react';
import Image from 'next/image';

function Skills() {
  return (
    <main>
      <section className="p-10 md:p-20 lg:p-36 xl:p-64 bg-gradient-to-r from-gray-800 to-gray-600 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image Section */}
          <div className="flex justify-center items-center order-first md:order-none">
            <Image
              className="shadow-lg"
              src="/images/npm.png"
              alt="Skills Image"
              width={500}
              height={500}
            />
          </div>
          {/* Text Section */}
          <div className="flex flex-col justify-center text-left space-y-5">
            <h1 className="text-4xl font-protest-strike font-normal w-full md:text-6xl">Skills</h1>
            <div className="flex flex-wrap gap-10 mt-5">
              <Image
                className="rounded-lg shadow-lg"
                src={"/images/html.png"}
                alt='HTML Image'
                width={150}
                height={100}
              />
              <Image
                className="rounded-lg shadow-lg"
                src={"/images/js.png"}
                alt='JS Image'
                width={150}
                height={100}
              />
              <Image
                className="rounded-lg shadow-lg"
                src={"/images/css.png"}
                alt='CSS Image'
                width={150}
                height={100}
              />
            </div>
            <p className="text-2xl italic text-yellow-200 mt-5">Continuously improving and expanding my skill set!</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Skills;
