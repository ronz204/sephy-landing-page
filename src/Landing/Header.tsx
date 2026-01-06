import type { JSX } from "react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Sections } from "@Constants/Sections";

export const Header = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">

        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold tracking-tight text-gray-900">SephyNex</span>
          </a>
        </div>

        <div className="flex lg:hidden">
          <button type="button" onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-900">

            <span className="sr-only">Abrir menú</span>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          {Sections.map((section) => (
            <a className="text-sm font-medium leading-6 text-gray-600 hover:text-gray-900 transition-colors"
              key={section.name} href={section.ref}>{section.label}</a>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <button className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium
             text-white hover:bg-gray-800 transition-colors">Contacto</button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-1 px-6 pb-6 pt-2">
            {Sections.map((section) => (
              <a className="block rounded-lg px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50"
                key={section.name} href={section.ref}>{section.label}</a>
            ))}

            <button className="w-full inline-flex items-center justify-center rounded-md bg-gray-900
              px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 transition-colors my-2">Contacto</button>
          </div>
        </div>
      )}
    </header>
  );
};
