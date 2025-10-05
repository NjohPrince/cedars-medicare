import React from "react";
import Link from "next/link";

import gbl from "../../../app/globals.module.css";
import cls from "./menu-link.module.css";

type MenuLinkAtomProps = {
  href: string;
  linkText: string;
};

const MenuLinkAtom = ({ href, linkText }: MenuLinkAtomProps) => {
  return (
    <Link
      aria-label={linkText}
      className={`${cls.link} ${gbl["t-delay-2"]}`}
      href={href}
    >
      {linkText}
    </Link>
  );
};

export default MenuLinkAtom;
