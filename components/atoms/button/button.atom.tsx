import React from "react";

import gbl from "../../../app/globals.module.css";
import cls from "./button.module.css";

type ButtonAtomProps = {
  btnText: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
};

const ButtonAtom = ({ btnText, iconLeft, iconRight }: ButtonAtomProps) => {
  return (
    <button
      aria-label={btnText}
      className={`${cls.button} ${gbl.flex} ${gbl["gap-8"]} ${gbl.justifyCenter} ${gbl.itemsCenter} ${gbl["t-delay-2"]}`}
    >
      {iconLeft}
      {btnText}
      {iconRight}
    </button>
  );
};

export default ButtonAtom;
