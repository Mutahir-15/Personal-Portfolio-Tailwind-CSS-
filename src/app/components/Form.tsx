import React from "react";
import Link from "next/link";


function Form() {
  return (
    <main>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10 md:p-20 lg:p-36 xl:p-48">
        <div className="grid grid-span-6 my-10">
          <h1 className="font-concert-one text-4xl md:text-6xl text-[#432818] font-bold">Let's Connect!</h1>
          <p className="text-xl md:text-3xl">
            Feel free to reach out to me for any inquiries, collaboration, or
            just to say Hello. <br />I'll get back to you as soon as possible!
            <br />Need any help or have to discuss something.<br /> I'm always open for that.
          </p>
          <p className="text-xl md:text-3xl">Let's create something amazing together!</p>
        </div>

        <div className="grid px-16 grid-span-6 space-y-5">
          <h1 className="text-left my-5 text-4xl font-protest-strike font-normal w-full md:text-6xl">Get in Touch</h1>
          <form className="flex flex-col font-arima font-bold space-y-4">
            <h3 className="text-2xl">Name:</h3>
            <input
              className="p-2 rounded-lg shadow-lg mb-4"
              type="text"
              placeholder="Full Name"
              required
            />
            <h3 className="text-2xl">Email:</h3>
            <input
              className="p-2 rounded-lg shadow-lg mb-4"
              type="text"
              placeholder="E-mail Address"
              required
            />
            <h3 className="text-2xl">Message:</h3>
            <textarea
              className="rounded-lg p-2 shadow-lg mb-4"
              placeholder="Add your Comments"
              rows={5}
              required
            ></textarea>
            <button
              className="bg-[#344e41] font-sans rounded-lg mr-auto mt-auto p-3 text-white inline-block tracking-wide transition-all duration-300 ease-in-out hover:bg-[#432818] hover:scale-105 text-left font-bold uppercase"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
export default Form;