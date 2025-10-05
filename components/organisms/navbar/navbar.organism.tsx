"use client";

import React from "react";
import Image from "next/image";

import gbl from "../../../app/globals.module.css";
import cls from "./navbar.module.css";

import MenuLinksMolecule from "@/components/molecules/menu-links/menu-links.molecule";
import CloseIcon from "@/components/icons/close.icon";
import BurgerIcon from "@/components/icons/burger.icon";

const NavbarOrganism = () => {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <nav
      role="navigation"
      aria-label="main navigation"
      className={`${cls.navbar} ${gbl["py-24"]} ${gbl.px} ${gbl.flex} ${gbl["gap-24"]} ${gbl["justify-between"]} ${gbl["items-center"]}`}
    >
      <div className={`${cls.logo}`}>
        <Image
          width={150}
          height={150}
          alt="cedars medicare logo"
          src={"/assets/images/cedars-logo.png"}
        />
      </div>
      <div className={`${gbl.flex} ${gbl["gap-24"]} ${gbl["items-center"]}`}>
        <MenuLinksMolecule setIsActive={setIsActive} isActive={isActive} />
        <button
          className={`${gbl.flex} ${gbl["items-center"]} ${cls.menu__toggle}`}
          aria-label="menu toggle button"
          onClick={() => setIsActive(!isActive)}
        >
          {isActive ? <CloseIcon /> : <BurgerIcon />}
        </button>
      </div>
    </nav>
  );
};

export default NavbarOrganism;
