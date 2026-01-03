import type { JSX } from "react";
import { CTA } from "@Landing/CTA";
import { Hero } from "@Landing/Hero";
import { Stats } from "@Landing/Stats";
import { Header } from "@Landing/Header";
import { Footer } from "@Landing/Footer";
import { Process } from "@Landing/Process";
import { Solutions } from "@Landing/Solutions";

export const LandingPage = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Stats />
      <Solutions />
      <Process />
      <CTA />
      <Footer />
    </div>
  );
};
