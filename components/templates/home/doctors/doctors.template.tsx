import React from "react";

import gbl from "../../../../app/globals.module.css";
import cls from "./doctors.module.css";

import DoctorCardMolecule from "@/components/molecules/doctor-card/doctor-card.molecule";
import { doctorsData } from "@/lib/data/doctors.data";

const DoctorsTemplate = () => {
  return (
    <div
      className={`${gbl.px} ${gbl["py-48"]} ${cls.doctors__container} ${gbl.flex} ${gbl["items-center"]} ${gbl["justify-center"]} ${gbl["flex-col"]} ${gbl["gap-48"]}`}
    >
      <div
        className={`${cls.header} ${gbl.flex} ${gbl["flex-col"]} ${gbl["items-center"]} ${gbl["justify-center"]} ${gbl["gap-8"]}`}
      >
        <h2>Meet Our Expert Doctors</h2>
        <p>
          Our team of skilled specialists is committed to your health, comfort,
          and confidence every step of the way
        </p>
      </div>
      <div className={`${cls.doctors} ${gbl["w-full"]}`}>
        {doctorsData &&
          doctorsData.length > 0 &&
          doctorsData.map((doctor, index) => (
            <DoctorCardMolecule
              key={`doctor-card-${index}`}
              img={doctor.img}
              name={doctor.name}
              type={doctor.type}
            />
          ))}
      </div>
    </div>
  );
};

export default DoctorsTemplate;
