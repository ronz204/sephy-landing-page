import type { JSX } from "react";
import { Header } from "@Landing/Header";

export const LandingPage = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
    </div>
  );
};
