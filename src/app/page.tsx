"use client";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import FAQ from "@/components/FAQ/FAQ";
import Rates from "@/components/Rates/Rates";
import Services from "@/components/Services/Services";
import Philosophy from "@/components/Philosophy/Philosophy";
import About from "@/components/About/About";
import Hero from "@/components/Hero/Hero";
import Divider from "@/components/Divider/Divider";
import Quote from "@/components/Quote/Quote";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center w-full justify-center">
      <Header />
      <Hero />
      <About />
      <Divider bg="#fefefe" borderColor="#7e7e6b" thickness={2} />
      <Philosophy />
      <Divider borderColor="#41413f" />
      <Services />
      <Rates />
      <FAQ />
      <Divider borderColor="#41413f" />
      <Contact />
      <Quote
        text={"I have come to believe that caring for myself is not self-indulgent. Caring for myself is an act of survival."}
        author={"Audre Lorde"}
      />
      <Footer />
    </div>
  );
}

