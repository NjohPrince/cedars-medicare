import React from "react";
import { Slide } from "react-awesome-reveal";

import gbl from "../../../../app/globals.module.css";
import cls from "./doctors.module.css";

import DoctorCardMolecule from "@/components/molecules/doctor-card/doctor-card.molecule";
import { doctorsData } from "@/lib/data/doctors.data";

const DoctorsTemplate = () => {
  return (
    <section
      id="doctors"
      className={`${gbl.px} ${gbl["py-48"]} ${cls.doctors__container} ${gbl.flex} ${gbl["items-center"]} ${gbl["justify-center"]} ${gbl["flex-col"]} ${gbl["gap-48"]}`}
    >
      <div
        className={`${cls.header} ${gbl.flex} ${gbl["flex-col"]} ${gbl["items-center"]} ${gbl["justify-center"]} ${gbl["gap-8"]}`}
      >
        <Slide direction="up" triggerOnce>
          <h2>Meet Our Expert Doctors</h2>
        </Slide>
        <Slide direction="up" delay={100} triggerOnce>
          <p>
            Our team of skilled specialists is committed to your health,
            comfort, and confidence every step of the way
          </p>
        </Slide>
      </div>
      <div className={`${cls.doctors} ${gbl["w-full"]}`}>
        {doctorsData &&
          doctorsData.length > 0 &&
          doctorsData.map((doctor, index) => (
            <Slide
              direction="up"
              key={`doctor-card-${index}`}
              delay={index * 100}
              triggerOnce
            >
              <DoctorCardMolecule
                img={doctor.img}
                name={doctor.name}
                type={doctor.type}
              />
            </Slide>
          ))}
      </div>
    </section>
  );
};

export default DoctorsTemplate;
