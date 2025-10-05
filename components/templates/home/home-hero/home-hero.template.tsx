import React from "react";
import Image from "next/image";

import gbl from "../../../../app/globals.module.css";
import cls from "./home-hero.module.css";

import ButtonAtom from "@/components/atoms/button/button.atom";
import StetescopeIcon from "@/components/icons/stetescope.icon";
import HeartPulseIcon from "@/components/icons/heart-pulse.icon";
import ForwardArrowIcon from "@/components/icons/forward-arrow.icon";

const HomeHeroTemplate = () => {
  return (
    <main
      className={`${gbl.container} ${gbl["w-full"]} ${gbl.px} ${gbl["py-32"]} ${cls.hero} ${gbl.flex} ${gbl["gap-32"]}`}
    >
      <div
        className={`${gbl.flex} ${gbl["flex-1"]} ${gbl["flex-col"]} ${gbl["gap-24"]} ${gbl["justify-center"]}`}
      >
        <div
          className={`${gbl.flex} ${gbl["flex-col"]} ${cls.text} ${gbl["gap-16"]}`}
        >
          <div>
            <span className={`${cls.badge}`}>Your Health. Our Innovation.</span>
            <h1>Innovative Healthcare Solutions for You</h1>
          </div>
          <p>
            We blend advanced medicine with heartfelt care, ensuring every
            patient at Cedars Medicare feels supported, valued, and confident in
            their path to recovery.
          </p>
        </div>
        <div>
          <ButtonAtom
            btnText="Book an Appointment"
            iconRight={<ForwardArrowIcon size="20" />}
            type="outline"
          />
        </div>

        <div
          className={`${gbl.flex} ${gbl["gap-12"]} ${gbl["px-12"]} ${gbl["py-12"]} ${cls.stats} ${gbl["flex-col"]}`}
        >
          <div
            className={`${gbl["w-full"]} ${gbl.flex} ${gbl["gap-16"]} ${gbl["items-center"]} ${gbl["justify-between"]} ${gbl["gap-12"]} ${gbl["px-16"]} ${gbl["py-12"]}`}
          >
            <div className={`${gbl.flex} ${gbl["flex-col"]}`}>
              <span>130+</span> Patients Served
            </div>
            <div className={`${cls.icon}`}>
              <HeartPulseIcon />
            </div>
            {/* <div className={`${cls.images} ${gbl.flex}`}>
              {Array(3)
                .fill(0)
                .map((_, index) => {
                  return (
                    <div key={index} className={`${cls.img}`}>
                      <Image
                        width={1920}
                        height={1080}
                        alt="cedars medicare logo"
                        src={`/assets/images/avatar${index + 1}.jpg`}
                        className={`${gbl["w-full"]} ${gbl["h-full"]}`}
                      />
                    </div>
                  );
                })}
            </div> */}
          </div>
          <div
            className={`${gbl["w-full"]} ${gbl.flex} ${gbl["gap-16"]} ${gbl["items-center"]}  ${gbl["justify-between"]}
              ${gbl["gap-12"]} ${gbl["px-16"]} ${gbl["py-12"]}`}
          >
            <div className={`${gbl.flex} ${gbl["flex-col"]}`}>
              <span>50+</span> Expert Doctors
            </div>
            <div className={`${cls.icon}`}>
              <StetescopeIcon />
            </div>
            {/* <div className={`${cls.images} ${gbl.flex}`}>
              {Array(3)
                .fill(0)
                .map((_, index) => {
                  return (
                    <div key={index} className={`${cls.img}`}>
                      <Image
                        width={1920}
                        height={1080}
                        alt="cedars medicare logo"
                        src={`/assets/images/doctor${index + 1}.png`}
                        className={`${gbl["w-full"]} ${gbl["h-full"]}`}
                      />
                    </div>
                  );
                })}
            </div> */}
          </div>
        </div>
      </div>
      <div
        className={`${gbl.flex} ${gbl["items-center"]} ${gbl["justify-center"]} ${cls.image} ${gbl["flex-1"]}`}
      >
        <Image
          width={1920}
          height={1080}
          alt="cedars medicare logo"
          src={"/assets/images/doctor2.png"}
        />
      </div>
    </main>
  );
};

export default HomeHeroTemplate;
