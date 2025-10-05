import React from "react";
import Image from "next/image";

import gbl from "../../../app/globals.module.css";
import cls from "./navbar.module.css";

import MenuLinksMolecule from "@/components/molecules/menu-links/menu-links.molecule";

const NavbarOrganism = () => {
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
      <MenuLinksMolecule />
    </nav>
  );
};

export default NavbarOrganism;
