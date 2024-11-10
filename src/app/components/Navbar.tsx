import Link from "next/link";
import React from "react";
import Image from "next/image";
function Navbar() {
  return (
    <main className="grid grid-cols-3 bg-black fixed w-full z-10 top-0 p-2">
      {/* Logo Section*/}
      <div className="flex items-center justify-center">
        <Image
          src={"/images/portfolio.png"}
          alt="Image"
          width={110}
          height={50}
        />{" "}
      </div>
      {/* Navigation Section*/}
      <nav className="grid grid-span-6 text-center text-2xl">
  <ul className="flex gap-6 p-4 justify-center text-white">
    <li>
      <Link href="/" className="hover:text-orange-500 hover:border-b-4 hover:border-orange-500 active:text-orange-500 active:border-b-4 active:border-orange-500">Home</Link>
    </li>
    <li>
      <Link href="/about" className="hover:text-orange-500 hover:border-b-4 hover:border-orange-500 active:text-orange-500 active:border-b-4 active:border-orange-500">About</Link>
    </li>
    <li>
      <Link href="/projects" className="hover:text-orange-500 hover:border-b-4 hover:border-orange-500 active:text-orange-500 active:border-b-4 active:border-orange-500">Projects</Link>
    </li>
    <li>
      <Link href="/details" className="hover:text-orange-500 hover:border-b-4 hover:border-orange-500 active:text-orange-500 active:border-b-4 active:border-orange-500">Details</Link>
    </li>
  </ul>
</nav>

      <div className="grid justify-center grid-span-3">
        <button className="mt-2 h-12 px-7 py-0 bg-orange-500 text-white border-2 border-transparent rounded-lg text-lg tracking-wide font-semibold transition ease duration-300 hover:bg-orangered hover:shadow-[0_0_25px_orange] hover:text-white">
          <Link href={"/contact"} >Contact Me</Link>
        </button>
      </div>
    </main>
  );
}
export default Navbar;
