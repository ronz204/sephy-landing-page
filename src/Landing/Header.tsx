import type { JSX } from "react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Links } from "@Components/Atoms/Links";

const sections: string[] = ["Soluciones", "Proceso", "Casos de Uso"];

export const Header = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">

        <div className="flex lg:flex-1">
          <span className="text-2xl font-bold tracking-tight text-gray-900">Sephy</span>
        </div>

        <div className="flex lg:hidden">
          <button type="button" onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-900">
              
            <span className="sr-only">Abrir menú</span>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          <Links isMobile={false} sections={sections} />
        </div>

        {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <Contact isMobile={false} />
        </div> */}

      </nav>

      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-1 px-6 pb-6 pt-2">
            <Links isMobile={true} sections={sections} />
            {/* <Contact isMobile={true} /> */}
          </div>
        </div>
      )}
    </header>
  );
};
