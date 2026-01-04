import type { JSX } from "react";
import { Services } from "@Constants/Services";

export const Solutions = (): JSX.Element => {
  return (
    <section id="solutions" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Soluciones que transforman
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-gray-600">
            Diseñamos automatizaciones personalizadas para cada necesidad. Desde flujos simples hasta sistemas complejos
            de integración empresarial.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4">
          {Services.map((solution) => {
            const Icon = solution.icon
            return (
              <div key={solution.title}
                className="group overflow-hidden rounded-xl border border-gray-200 bg-white p-6
                 transition-all hover:border-gray-900 hover:shadow-xl hover:-translate-y-1">

                <div className="mb-4 inline-flex rounded-lg bg-linear-to-br from-gray-100 to-gray-50
                   p-3 transition-all group-hover:from-gray-900 group-hover:to-gray-800">
                    
                  <Icon className="h-6 w-6 text-gray-700 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{solution.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{solution.description}</p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  );
};
