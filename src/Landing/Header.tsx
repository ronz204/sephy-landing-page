import type { JSX } from "react";
import { useState } from "react";

export const Header = (): JSX.Element => {
  const sections: string[] = ["Solutions", "Process", "Cases"];
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">

        <div className="flex lg:flex-1">
          <span className="text-2xl font-bold">Sephy</span>
        </div>

        <div className="flex lg:hidden">
          <button type="button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            open
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          {sections.map((section) => (
            <a href={`#${section.toLowerCase()}`} 
              className="text-sm font-medium">{section}</a>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1">
          <button>
            contact
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="space-y-1 px-6 pb-6 pt-2">

              {sections.map((section) => (
                <a key={section} href={`#${section.toLowerCase()}`}
                  className="block rounded-lg px-3 py-2">{section}</a>
              ))}

            </div>
          </div>
        )}

      </nav>
    </header>
  );
};
