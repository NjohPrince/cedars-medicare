"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import cls from "./navbar.module.css";
import gbl from "../../../app/globals.module.css";

import MenuLinksMolecule from "@/components/molecules/menu-links/menu-links.molecule";
import CloseIcon from "@/components/icons/close.icon";
import BurgerIcon from "@/components/icons/burger.icon";
import BookIcon from "@/components/icons/book.icon";

const NavbarOrganism = () => {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <nav
      role="navigation"
      aria-label="main navigation"
      className={`${cls.navbar} ${gbl["py-24"]} ${gbl.px} ${gbl.flex} ${gbl["gap-24"]} ${gbl["justify-between"]} ${gbl["items-center"]}`}
    >
      <button
        className={`${cls.book__btn}`}
        aria-label="book appointment button"
      >
        <BookIcon />
      </button>
      <div className={`${cls.logo}`}>
        <Link href={"/"} aria-label="home link">
          <Image
            width={150}
            height={150}
            alt="cedars medicare logo"
            src={"/assets/images/cedars-logo.webp"}
          />
        </Link>
      </div>
      <div className={`${gbl.flex} ${gbl["gap-24"]} ${gbl["items-center"]}`}>
        <MenuLinksMolecule isActive={isActive} />
        <button
          className={`${gbl["items-center"]} ${cls.menu__toggle}`}
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
