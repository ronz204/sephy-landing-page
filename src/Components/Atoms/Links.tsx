import type { JSX } from "react";

interface Props {
  isMobile: boolean;
  sections: string[];
};

export const Links = (props: Props): JSX.Element[] => {
  const linkClass = props.isMobile
    ? "block rounded-lg px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50"
    : "text-sm font-medium leading-6 text-gray-600 hover:text-gray-900 transition-colors";

  return props.sections.map((section) => (
    <a key={section} href={`#${section.toLowerCase()}`} className={linkClass}>{section}</a>
  ));
};
