import Image from "next/image";
import AboutSection from "../components/AboutSection";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Form from "../components/Form";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero Section with Video Background */}
      <section className="">
        {/* <div className="absolute inset-0 z-0 h-16">
          <video className="w-full h-full object-cover" autoPlay loop muted>
            <source src="/videos/bg1.mp4" type="video/mp4" />
          </video>
        </div> */}
        <div className="relative flex flex-col md:flex-row items-center justify-between p-10 md:p-20 lg:p-32 xl:p-48  rounded-md">
          {/* Text Section */}
          <div className="md:w-1/2 mb-10 md:mb-0 text-left">
            <h3 className="text-5xl font-protest-strike font-normal w-full md:text-6x mb-4">Hi</h3>
            <h1 className="text-5xl font-protest-strike font-normal w-full md:text-6x mb-4"> I'm <span className="text-orange-500">Mutahir</span><br/> a Next.JS Developer.</h1>
            <p className="text-2xl p1 mb-4">
            As a participant in the Governor's Initiative for AI, Web 3.0, and Metaverse, I am gaining hands-on experience and advanced skills in AI technologies, decentralized web development, and immersive 3D environments. <br/>You can reach out to me!
            </p>
            <button className="px-7 py-2 bg-black text-white border-2 border-transparent rounded-lg text-lg tracking-wide font-semibold transition ease duration-300 hover:bg-orange-500 hover:shadow-[0_0_25px_orange] hover:text-white">
              <Link href="/contact">Hire Me</Link>
            </button>  
            <button className=" ml-3 px-7 py-2 bg-orange-500 text-white border-2 border-black rounded-lg text-lg tracking-wide font-semibold transition ease-in-out duration-300 hover:bg-white hover:text-orange-500 cursor-pointer">
              <Link href="/contact">Resume</Link>
            </button>               {/* Added Contact Me button */}
          </div>
          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <Image 
              src={"/images/04.PNG"}
              alt="Profile Image"
              width={500}
              height={500}
              className="rounded-full shadow-lg border-8 border-orange-500"
            />
          </div>
        </div>
      </section>
      <AboutSection />
      <Projects />
      <Skills />
      <Form />
    </main>
  );
}
