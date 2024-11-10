import React from "react";
import Image from "next/image";

function Details() {
  return (
    <main>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10 md:p-20 lg:p-32 xl:p-64">
        {/* Image Section */}
        <div className="flex justify-center items-center">
          <Image
            className="rounded-lg shadow-lg"
            src="/images/details.png"
            alt="Profile Image"
            width={300}
            height={300}
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center space-y-5">
          <h1 className="text-4xl md:text-6xl font-protest-strike font-normal text-gray-800">Details:</h1>
          <ul className="text-xl md:text-2xl space-y-2 font-bold text-gray-700">
            <li>Email: mutahir.bin.athar2005@gmail.com</li>
            <li>Call/WhatsApp: +92 334 3616619</li>
            <li>LinkedIn: linkedin.com/me/</li>
            <li>Address: Karachi, Pakistan</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default Details;
