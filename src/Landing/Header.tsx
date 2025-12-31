import type { JSX } from "react";

export const Header = (): JSX.Element => {
  const sections: string[] = ["Solutions", "Process", "Cases"];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">

        <div className="flex lg:flex-1">
          <span className="text-2xl font-bold">Sephy</span>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          {sections.map((section) => (
            <a href={`#${section.toLowerCase()}`} 
              className="text-sm font-medium">{section}</a>
          ))}
        </div>

      </nav>
    </header>
  );
};
