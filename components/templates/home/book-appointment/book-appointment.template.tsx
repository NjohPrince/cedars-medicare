"use client";

import React, { useState } from "react";
import { Slide } from "react-awesome-reveal";

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
      <div
        className={`${cls.header} ${gbl["items-center"]} ${gbl["justify-center"]} ${gbl.flex} ${gbl["flex-col"]} ${gbl["gap-8"]}`}
      >
        <Slide direction="up" triggerOnce>
          <h2>Book an Appointment</h2>
        </Slide>
        <Slide direction="up" delay={100} triggerOnce>
          <p>
            Schedule your appointment with ease and take the first step towards
            better healthcare.
          </p>
        </Slide>

        <form
          className={`${cls.subscribe} ${gbl.flex} ${gbl["flex-col"]} ${gbl["gap-24"]}`}
          onSubmit={(e) => e.preventDefault()}
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
                      type="button"
                      aria-pressed={selectedDay === day}
                      aria-label={`Select ${day}`}
                      key={index}
                      onClick={() => setSelectedDay(day)}
                      className={`${selectedDay === day ? cls.active : ""} ${
                        gbl["t-delay-3"]
                      }`}
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
            <div className={`${gbl.flex} ${gbl["gap-8"]} ${cls.group}`}>
              <label className={`${gbl["sr-only"]}`} htmlFor="firstName">
                First Name
              </label>
              <input name="firstName" type="text" placeholder="First Name" />

              <label className={`${gbl["sr-only"]}`} htmlFor="lastName">
                Last Name
              </label>
              <input name="lastName" type="text" placeholder="Last Name" />
            </div>
            <div className={`${gbl.flex} ${gbl["gap-8"]} ${cls.group}`}>
              <label className={`${gbl["sr-only"]}`} htmlFor="email">
                E-Mail Address
              </label>
              <input
                name="email"
                type="text"
                placeholder="ex: jack@example.com"
              />

              <label className={`${gbl["sr-only"]}`} htmlFor="phoneNumber">
                Phone Number
              </label>
              <input
                name="phoneNumber"
                type="text"
                placeholder="ex: +1 234 567 8901"
              />
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
            controlType="submit"
          />
        </form>
      </div>
    </section>
  );
};

export default BookAppointmentTemplate;
