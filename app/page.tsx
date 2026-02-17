import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { TechStack } from "./components/TechStack";
import { SelectedWorks } from "./components/SelectedWorks";
import { Contact } from "./components/Contact";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Experience />
        <TechStack />
        <SelectedWorks />
        <About />
        <Contact />
      </main>
    </div>
  );
}
