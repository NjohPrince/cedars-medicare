import React from "react";

import gbl from "../../../app/globals.module.css";
import cls from "./button.module.css";

type ButtonAtomProps = {
  btnText: string;
};

const ButtonAtom = ({ btnText }: ButtonAtomProps) => {
  return (
    <button
      aria-label="button"
      className={`${cls.button} ${gbl.flex} ${gbl.justifyCenter} ${gbl.itemsCenter} ${gbl["t-delay-2"]}`}
    >
      {btnText}
    </button>
  );
};

export default ButtonAtom;
