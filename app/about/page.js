import NextImage from "next/image";
import image1 from "../image/image1.avif";

export default function page() {
  return (
    <section className="py-8 text-gray-400 font-medium text-md tracking-wider">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          <div className="lg:w-1/2 w-full">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              About Me
            </h2>
            <p className="leading-relaxed  mt-4">
              Hey there, I'm pretty obsessed with building cool stuff with code.
              My tech journey started when I was just 11 years old – I got my
              hands on BackTrack OS and was instantly hooked. That curiosity led
              me down a rabbit hole of programming that I'm still happily stuck
              in today. After years of teaching myself and eventually getting my
              <span className="text-[#64FFda]"> engineering degree </span>and
              <span className="text-[#64FFda]">
                {" "}
                Master's in Computer Science,
              </span>{" "}
              I've spent <span className="text-[#64FFda]">+7 years</span> honing
              my skills professionally and have been lucky enough to work with
              some really interesting companies and startups. I've built
              everything from NFT marketplaces at{" "}
              <span className="text-[#64FFda]">FeverTokens</span> to working on
              major releases for <span className="text-[#64FFda]">Vision</span>{" "}
              (the world's second-largest ENS marketplace). Currently, I'm
              leading the charge on the digital side of one of the world's most
              recognized energy statistics projects at the{" "}
              <span className="text-[#64FFda]">Energy Institute</span>, bringing
              complex data to life online, managing its{" "}
              <span className="text-[#64FFda]">Azure DevOps</span> pipeline, and
              developing solutions with tools like{" "}
              <span className="text-[#64FFda]">Squiz Matrix CMS</span>. What I
              love most is diving into new challenges and picking up fresh
              skills along the way – like{" "}
              <span className="text-[#64FFda]">building AI</span> agents and
              exploring{" "}
              <span className="text-[#64FFda]">AI-powered automation</span>.
              There's always something new to learn in this field, and I'm here
              for it.
            </p>
            <p className="leading-relaxed  mt-4">
              {" "}
              Here's what I'm usually working with these days:{" "}
            </p>
            <ul className="list-disc columns-2 gap-x-8">
              <li>Html5</li>
              <li>Css</li>
              <li>React</li>
              <li>Javascript</li>
              <li>Html5</li>
              <li>Css</li>
              <li>React</li>
              <li>Javascript</li>
            </ul>

            <p className="">
              Whether it's web3 projects, leading significant data initiatives,
              traditional web apps, or something completely different, I'm
              always up for the next adventure in code.{" "}
            </p>
          </div>
          <div className="border-2 border-[#64FFda] rounded-lg  shadow-[0_0_20px_#64FFda66] transition-transform hover:scale-105">
            <div className="relative left-[-30px] top-[-40px]">
              <NextImage
                src={image1}
                width={300}
                height={300}
                alt="Picture of the author"
                className="rounded-lg p-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
