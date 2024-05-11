import style from "./NavBar.module.css";
import NavButton from "./NavButton";
import { Search } from "lucide-react";
export interface NavBarProps {
  containerClass?: string;
}
export function NavBar({ containerClass }: NavBarProps) {
  return (
    <nav className={`${containerClass} ${style.nav}`}>
      <NavButton icon={<Search></Search>} href="" text="Buscar"></NavButton>
    </nav>
  );
}
