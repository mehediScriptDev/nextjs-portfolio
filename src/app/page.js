
import Hero from "./components/Hero";
import Projects from "./projects/page";
import Skills from "./skills/page";


export default function Home() {
  return (
    <section className="w-11/12 mx-auto">
      <div>
        <Hero></Hero>
        <Projects></Projects>
        <Skills></Skills>
        
      </div>
    </section>
  );
}
