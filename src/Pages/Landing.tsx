import type { JSX } from "react";
import { Hero } from "@Landing/Hero";
import { Stats } from "@Landing/Stats";
import { Header } from "@Landing/Header";
import { Solutions } from "@Landing/Solutions";

export const LandingPage = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Stats />
      <Solutions />
    </div>
  );
};
