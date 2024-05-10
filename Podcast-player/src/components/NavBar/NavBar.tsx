import style from "./NavBar.module.css";
export interface NavBarProps {
  containerClass?: string;
}
export function NavBar({ containerClass }: NavBarProps) {
  return <nav className={`${containerClass} ${style.nav}`}></nav>;
}
