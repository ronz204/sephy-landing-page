import type { JSX } from "react";
import { Zap, ArrowRight } from "lucide-react";

export const Hero = (): JSX.Element => {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(0,0,0,0.05),transparent_50%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,rgba(0,0,0,0.03),transparent_50%)]" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-linear-to-br
         from-gray-50 to-white shadow-2xl ring-1 ring-gray-100 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2
           lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">

          <div className="max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
            <div className="mb-8 flex items-center gap-x-2">
              <Zap className="h-5 w-5 text-gray-900" />
              <span className="text-sm font-medium text-gray-600">Expertos en n8n</span>
            </div>
            <h1 className="text-balance text-5xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Automatiza tu negocio. Multiplica resultados.
            </h1>
            <p className="mt-6 text-pretty text-md lg:text-lg leading-relaxed text-gray-600">
              Diseñamos e implementamos automatizaciones inteligentes que transforman tus procesos manuales en flujos de
              trabajo eficientes. Ahorra tiempo, reduce errores y enfócate en lo que realmente importa.
            </p>

            <div className="mt-10 flex items-center gap-x-6">
              <button className="group inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-base font-medium text-white hover:bg-gray-800 transition-all">
                Agenda una Demo
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};
