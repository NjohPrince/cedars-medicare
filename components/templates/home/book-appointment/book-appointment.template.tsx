import React from "react";
import { Slide, Fade } from "react-awesome-reveal";
import Image from "next/image";

import gbl from "../../../../app/globals.module.css";
import cls from "./book-appointment.module.css";

const BookAppointmentTemplate = () => {
  return (
    <section
      id="book-appointment"
      className={`${gbl["w-full"]} ${cls.book} ${gbl.px} ${gbl["py-48"]} ${gbl.flex} ${gbl["gap-32"]}`}
    >
      <div className={`${cls.image} ${gbl.flex} ${gbl["items-center"]}`}>
        <Fade direction="left" triggerOnce>
          <Image
            width={620}
            height={620}
            alt="cedars medicare"
            src={"/assets/images/book.jpg"}
          />
        </Fade>
      </div>
      <div
        className={`${cls.header} ${gbl.flex} ${gbl["flex-col"]} ${gbl["gap-8"]}`}
      >
        <Slide direction="up" triggerOnce>
          <h2>Book Your Appointment</h2>
        </Slide>
        <Slide direction="up" delay={100} triggerOnce>
          <p>
            Schedule your appointment with ease and take the first step towards
            better healthcare.
          </p>
        </Slide>
      </div>
    </section>
  );
};

export default BookAppointmentTemplate;
