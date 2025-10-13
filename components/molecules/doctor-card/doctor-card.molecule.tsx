import React from "react";
import Image from "next/image";

import gbl from "../../../app/globals.module.css";
import cls from "./doctor-card.module.css";

export type DoctorCardMoleculeProps = {
  img: string;
  name: string;
  type: string;
};

const DoctorCardMolecule = ({
  img = "/assets/images/doctor2.webp",
  name,
  type,
}: DoctorCardMoleculeProps) => {
  return (
    <article className={`${cls.card} ${gbl["w-full"]} ${gbl['t-delay-3']}`}>
      <div className={`${cls.image} ${gbl["w-full"]}`}>
        <Image width={1920} height={1080} alt={name} src={img} />
      </div>
      <div className={`${cls.details} ${gbl["t-delay-3"]}`}>
        <h3 className={`${gbl["t-delay-3"]}`}>{name}</h3>
        <h4 className={`${gbl["t-delay-3"]}`}>{type}</h4>
      </div>
    </article>
  );
};

export default DoctorCardMolecule;
