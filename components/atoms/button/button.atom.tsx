import React from "react";

import gbl from "../../../app/globals.module.css";
import cls from "./button.module.css";

type ButtonAtomProps = {
  btnText: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  type?: "outline" | "normal";
};

const ButtonAtom = ({
  btnText,
  iconLeft,
  iconRight,
  type,
}: ButtonAtomProps) => {
  return (
    <button
      aria-label={btnText}
      className={`${cls.button} ${type === "outline" ? cls.outlined : ""} ${
        gbl.flex
      } ${gbl["gap-8"]} ${gbl.justifyCenter} ${gbl.itemsCenter} ${
        gbl["t-delay-2"]
      }`}
    >
      {iconLeft}
      {btnText}
      {iconRight}
    </button>
  );
};

export default ButtonAtom;
