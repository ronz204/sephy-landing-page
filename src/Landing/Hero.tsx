import type { JSX } from "react";

export const Hero = (): JSX.Element => {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(0,0,0,0.05),transparent_50%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,rgba(0,0,0,0.03),transparent_50%)]" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-linear-to-br
         from-gray-50 to-white shadow-2xl ring-1 ring-gray-100 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="">

        </div>
      </div>
    </section>
  );
};
