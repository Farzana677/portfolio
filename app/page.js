import Intro from "./intro/page";
import About from "./about/page";
import Experience from "./experience/page";
import Projectts from "./projectts/page";
import Contact from "./contact/page";
export default function Home() {
  return (
    <>
      <Intro />
      <About />
      <Experience />
      <Projectts />
      <Contact />
    </>
  );
}
