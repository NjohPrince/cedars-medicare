"use client";

import React, { useState } from "react";
import { Slide, Fade } from "react-awesome-reveal";
import Image from "next/image";

import gbl from "../../../../app/globals.module.css";
import cls from "./book-appointment.module.css";
import ButtonAtom from "@/components/atoms/button/button.atom";
import ForwardArrowIcon from "@/components/icons/forward-arrow.icon";

const BookAppointmentTemplate = () => {
  const [selectedDay, setSelectedDay] = useState("");
  const days = ["Mon", "Tues", "Wed", "Thurs", "Fri"];

  return (
    <section
      id="book-appointment"
      className={`${gbl["w-full"]} ${cls.book} ${gbl.px} ${gbl["py-48"]} ${gbl.flex} ${gbl["gap-32"]} ${gbl["items-center"]} ${gbl["justify-center"]}`}
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

        <form
          className={`${cls.subscribe} ${gbl.flex} ${gbl["flex-col"]} ${gbl["gap-24"]}`}
        >
          <div
            className={`${cls.day__select} ${gbl.flex} ${gbl["gap-8"]} ${gbl["flex-col"]}`}
          >
            <h3>Select Preferred Days</h3>
            <div className={`${cls.days} ${gbl.flex} ${gbl["gap-8"]}`}>
              {days &&
                days.length > 0 &&
                days.map((day, index) => {
                  return (
                    <button
                      key={index}
                      onClick={() => {
                        setSelectedDay(day);
                      }}
                      className={`${selectedDay === day ? cls.active : ""} ${gbl['t-delay-3']}`}
                    >
                      {day}
                    </button>
                  );
                })}
            </div>
          </div>
          <div
            className={`${cls.details} ${gbl.flex} ${gbl["flex-col"]} ${gbl["gap-8"]}`}
          >
            <h3>Enter Your Details</h3>
            <div className={`${gbl.flex} ${gbl["gap-8"]}`}>
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <div className={`${gbl.flex} ${gbl["gap-8"]}`}>
              <input type="text" placeholder="E-Mail Address" />
              <input type="text" placeholder="Phone Number" />
            </div>
            <textarea
              name="message"
              id="message"
              placeholder="Message"
            ></textarea>
          </div>
          <ButtonAtom
            btnText="Submit Request"
            iconRight={<ForwardArrowIcon size="20" />}
          />
        </form>
      </div>
    </section>
  );
};

export default BookAppointmentTemplate;
