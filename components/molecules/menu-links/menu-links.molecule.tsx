import React from "react";

import gbl from "../../../app/globals.module.css";
import cls from "./menu-links.module.css";

import { menuList } from "@/lib/data/menu.data";
import MenuLinkAtom from "@/components/atoms/menu-link/menu-link.atom";
import ButtonAtom from "@/components/atoms/button/button.atom";
import ForwardArrowIcon from "@/components/icons/forward-arrow.icon";

type MenuLinksMoleculeProps = {
  isActive?: boolean;
};

const MenuLinksMolecule: React.FC<MenuLinksMoleculeProps> = ({ isActive }) => {
  return (
    <div
      className={`${isActive ? gbl["flex-col"] : gbl.flex} ${gbl["gap-32"]} ${
        gbl["items-center"]
      }`}
    >
      <ul
        className={`${cls.menu__links} ${
          isActive ? gbl["flex-col"] : gbl.flex
        } ${gbl["gap-24"]} ${gbl.justifyCenter} ${gbl.itemsCenter}`}
      >
        {menuList.map((item) => (
          <li key={item.id}>
            <MenuLinkAtom href={item.href} linkText={item.name} />
          </li>
        ))}
      </ul>
      <ButtonAtom
        btnText="Book an Appointment"
        iconRight={<ForwardArrowIcon size="20" />}
      />
    </div>
  );
};

export default MenuLinksMolecule;
