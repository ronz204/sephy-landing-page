import type { JSX } from "react";
import { Bot, Database, Mail, Workflow, Bell, FileText, ShoppingCart, Users } from "lucide-react"

const solutions = [
  {
    icon: Workflow,
    title: "Automatización de Procesos",
    description: "Conecta tus herramientas y crea flujos de trabajo sin código que se ejecutan automáticamente.",
  },
  {
    icon: Mail,
    title: "Email Marketing Inteligente",
    description:
      "Campañas personalizadas, seguimiento automático y respuestas basadas en el comportamiento del usuario.",
  },
  {
    icon: Database,
    title: "Integración de Datos",
    description: "Sincroniza información entre plataformas en tiempo real. CRM, ERP, bases de datos y más.",
  },
  {
    icon: Bot,
    title: "Chatbots & IA",
    description: "Asistentes virtuales inteligentes que atienden a tus clientes 24/7 con respuestas naturales.",
  },
  {
    icon: Bell,
    title: "Notificaciones Automáticas",
    description: "Alertas inteligentes por Slack, Teams, WhatsApp o email basadas en eventos específicos.",
  },
  {
    icon: FileText,
    title: "Generación de Reportes",
    description: "Informes automáticos con datos actualizados. Programa envíos y olvídate del trabajo manual.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Automation",
    description: "Gestión de inventario, procesamiento de pedidos y seguimiento de envíos automatizados.",
  },
  {
    icon: Users,
    title: "Onboarding Automatizado",
    description: "Procesos de incorporación de clientes y empleados completamente automatizados y personalizados.",
  },
];

export const Solutions = (): JSX.Element => {
  return (
    <section id="solutions" className="py-24 sm:py-32 bg-gray-50">
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
          {solutions.map((solution) => {
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
