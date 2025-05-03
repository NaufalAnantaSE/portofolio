import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Stacks } from "@/components/stacks";
import {LogoAnimation} from "@/components/logoAnimation";
import { Portfolio } from "@/components/portfolio";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stacks />
      <LogoAnimation />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}
