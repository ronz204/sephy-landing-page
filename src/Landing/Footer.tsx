import type { JSX } from "react";

export const Footer = (): JSX.Element => {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <p className="text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Sephy. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};
