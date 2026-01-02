import type { JSX } from "react";
import { Hero } from "@Landing/Hero";
import { Header } from "@Landing/Header";

export const LandingPage = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
    </div>
  );
};
