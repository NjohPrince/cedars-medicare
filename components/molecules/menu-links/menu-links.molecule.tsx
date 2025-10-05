import React from "react";

import gbl from "../../../app/globals.module.css";
import cls from "./menu-links.module.css";

import { menuList } from "@/lib/data/menu.data";
import MenuLinkAtom from "@/components/atoms/menu-link/menu-link.atom";
import ButtonAtom from "@/components/atoms/button/button.atom";

type MenuLinksMoleculeProps = {
  setIsActive?: React.Dispatch<React.SetStateAction<boolean>>;
  isActive?: boolean;
};

const MenuLinksMolecule: React.FC<MenuLinksMoleculeProps> = ({
  setIsActive,
  isActive,
}) => {
  return (
    <div className={`${gbl.flex} ${gbl["gap-32"]} ${gbl["items-center"]}`}>
      <ul
        className={`${cls.menu__links} ${gbl.flex} ${gbl["gap-24"]} ${gbl.justifyCenter} ${gbl.itemsCenter}`}
      >
        {menuList.map((item) => (
          <li key={item.id}>
            <MenuLinkAtom href={item.href} linkText={item.name} />
          </li>
        ))}
      </ul>
      <ButtonAtom btnText="Book an Appointment" />
    </div>
  );
};

export default MenuLinksMolecule;
