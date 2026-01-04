import type { JSX } from "react";
import { Stats } from "@Constants/Stats";

export const Statistics = (): JSX.Element => {
  return (
    <section className="border-y border-gray-200 bg-gray-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {Stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="flex flex-col items-center text-center group">
                <div className="mb-4 rounded-xl bg-linear-to-br from-gray-100
                   to-gray-50 p-3 transition-all group-hover:from-gray-900 group-hover:to-gray-800">
                    
                  <Icon className="h-6 w-6 text-gray-700 group-hover:text-white transition-colors" />
                </div>
                <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{stat.value}</p>
                <p className="mt-2 text-sm text-gray-600">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
