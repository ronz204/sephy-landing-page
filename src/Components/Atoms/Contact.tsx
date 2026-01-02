import type { JSX } from "react";

interface Props {
  isMobile: boolean;
};

export const Contact = ({ isMobile }: Props): JSX.Element => {
  const baseBtnClass = "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors";

  const contactClass = isMobile
    ? `w-full ${baseBtnClass} border border-gray-300 bg-white text-gray-700 hover:bg-gray-50`
    : `${baseBtnClass} text-gray-700 hover:bg-gray-100`;

  const demoClass = `${isMobile ? 'w-full ' : ''}${baseBtnClass} bg-gray-900 text-white hover:bg-gray-800`;

  return (
    <div className={isMobile ? "mt-4 space-y-2" : "flex gap-x-4"}>
      <button className={contactClass}>Contacto</button>
      <button className={demoClass}>Agenda una Demo</button>
    </div>
  );
};
