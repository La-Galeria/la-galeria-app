"use client";
import { GoHome } from "react-icons/go";
import NavItem from "../atoms/navItem";
import { MdLogout, MdOutlineInventory } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { FiScissors } from "react-icons/fi";

export default function NavBar() {
  return (
    <nav className="bg-lime-950 fixed bottom-0 flex justify-between w-full">
      <NavItem route="/" Icon={GoHome} />
      <NavItem route="/inventario" Icon={MdOutlineInventory} />
      <NavItem route="/nuevo" Icon={FaPlus} />
      <NavItem route="/servicios" Icon={FiScissors} />
      <NavItem route="/salir" Icon={MdLogout} />
    </nav>
  );
}