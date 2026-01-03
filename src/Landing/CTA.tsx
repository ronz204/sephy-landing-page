import type { JSX } from "react";
import { ArrowRight } from "lucide-react";

export const CTA = (): JSX.Element => {
  return (
    <section className="relative isolate overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 
        bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.03),transparent_70%)]"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            ¿Listo para automatizar tu negocio?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-gray-600">
            Agenda una sesión gratuita de 30 minutos. Analizamos tu caso, identificamos oportunidades y te mostramos el
            potencial de n8n para tu empresa.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button className="group inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-base font-medium text-white hover:bg-gray-800 transition-all">
              Agenda tu Consultoría Gratuita
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
          <p className="mt-6 text-sm text-gray-600">
            Sin compromiso. Sin costos ocultos. Solo una conversación sobre tu futuro automatizado.
          </p>
        </div>
      </div>
    </section>
  );
};
