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
            <p className="leading-relaxed mt-4">
              Hey there, I'm passionate about building beautiful, intuitive, and
              interactive user interfaces with code. I started experimenting
              with <span className="text-[#64FFda]">HTML</span> and{" "}
              <span className="text-[#64FFda]">CSS</span> and quickly fell in
              love with the world of web development. Since then, I've been on a
              constant learning path, diving deep into front-end technologies.
              After earning my{" "}
              <span className="text-[#64FFda]">Bachelor's degree</span> and my{" "}
              <span className="text-[#64FFda]">
                Master's in Computer Applications
              </span>
              , I've spent over <span className="text-[#64FFda]">1 years</span>{" "}
              sharpening my skills and collaborating with talented teams on
              exciting web projects. I've built everything from dynamic web
              applications to interactive websites using technologies like{" "}
              <span className="text-[#64FFda]">React</span>,{" "}
              <span className="text-[#64FFda]">JavaScript</span>, and{" "}
              <span className="text-[#64FFda]">TypeScript</span>. I've worked
              with amazing companies and startups, helping them create
              user-centric, high-performance digital experiences. Every day
              brings new learning opportunities, and I'm always excited to
              explore the latest trends and tools in front-end development.
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
              <li>Tailwind</li>
              <li>Bootstrap</li>
              <li>NextJs</li>
              <li>TypeScript</li>
            </ul>

            <p>
              Whether it's building interactive web applications, exploring new
              front-end frameworks, developing web3 interfaces, or diving into
              creative design challenges, I'm always up for the next adventure
              in code.{" "}
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
