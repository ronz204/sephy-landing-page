import type { JSX } from "react";
import { Steps } from "@Constants/Steps";

export const Process = (): JSX.Element => {
  return (
    <section id="process" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-4xl font-bold tracking-tight
            text-gray-900 sm:text-5xl">Proceso probado</h2>

          <p className="mt-6 text-pretty text-lg leading-relaxed text-gray-600">
            Metodología clara y transparente. Desde el primer contacto hasta el despliegue y más allá.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {Steps.map((step) => (
            <div key={step.number} className="relative overflow-hidden rounded-xl border border-gray-200
               bg-white p-8 group hover:border-gray-900 transition-all hover:shadow-xl">

              <div className="absolute right-4 top-4 text-7xl font-bold text-gray-100
                transition-all group-hover:text-gray-200">{step.number}</div>

              <div className="relative">
                <div className="mb-4 flex items-center gap-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-gray-900
                     to-gray-700 text-sm font-bold text-white">{step.number}</div>
                  
                  <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                </div>
                <p className="text-pretty leading-relaxed text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
