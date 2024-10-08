import { ReactElement } from "react";

interface NavButtonProp {
  icon: ReactElement;
  text?: string;
  href?: string;
}

export default function NavButton({ icon, text }: NavButtonProp) {
  return (
    <>
      <button>
        <span>{icon}</span>
        <span>{text}</span>
      </button>
    </>
  );
}
