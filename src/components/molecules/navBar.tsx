import { GoHome } from "react-icons/go";
import NavItem from "../atoms/navItem";
import { MdLogout, MdOutlineInventory } from "react-icons/md";
import { FaPlus, FaScissors } from "react-icons/fa6";

export default function NavBar({ className }: { className: string }) {
  return (
    <nav className={className}>
      <NavItem route="/"><GoHome /></NavItem>
      <NavItem route="/inventario"><MdOutlineInventory /></NavItem>
      <NavItem route="/nuevo"><FaPlus /></NavItem>
      <NavItem route="/servicios"><FaScissors /></NavItem>
      <NavItem route="/salir"><MdLogout /></NavItem>
    </nav>
  );
}