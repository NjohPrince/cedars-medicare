import React from "react";
import Image from "next/image";
import { Slide, JackInTheBox, Fade } from "react-awesome-reveal";

import gbl from "../../../../app/globals.module.css";
import cls from "./home-hero.module.css";

import ButtonAtom from "@/components/atoms/button/button.atom";
import StetescopeIcon from "@/components/icons/stetescope.icon";
import HeartPulseIcon from "@/components/icons/heart-pulse.icon";
import ForwardArrowIcon from "@/components/icons/forward-arrow.icon";
import StarIcon from "@/components/icons/star.icon";

const HomeHeroTemplate = () => {
  return (
    <main
      className={`${gbl["w-full"]} ${gbl.px} ${gbl["py-48"]} ${cls.hero} ${gbl.flex} ${gbl["gap-32"]}`}
    >
      <div
        className={`${gbl.flex} ${gbl["flex-1"]} ${gbl["flex-col"]} ${gbl["gap-24"]} ${gbl["justify-center"]} ${cls.text__content}`}
      >
        <div
          className={`${gbl.flex} ${cls.hide} ${gbl["flex-col"]} ${cls.text} ${gbl["gap-16"]}`}
        >
          <Slide direction="up" triggerOnce>
            <div className={`${cls.desktop} ${gbl["w-full"]}`}>
              <div
                className={`${cls.review} ${gbl.flex} ${gbl["items-center"]} ${gbl["gap-8"]}`}
              >
                <div
                  className={`${cls.stars} ${gbl.flex} ${gbl["items-center"]} ${gbl["gap-2"]}`}
                >
                  {Array(5)
                    .fill(0)
                    .map((_, index) => (
                      <StarIcon key={index} size={"16"} color="var(--yellow)" />
                    ))}
                </div>
                <p className={cls.rating}>5.0 (534+ Reviews)</p>
              </div>
            </div>
          </Slide>
          <Slide direction="up" triggerOnce>
            <div>
              {/* <span className={`${cls.badge}`}>Your Health. Our Innovation.</span> */}
              <h1>Innovative Healthcare Solutions for You</h1>
            </div>
          </Slide>
          <Slide direction="up" delay={200} triggerOnce>
            <p>
              We blend advanced medicine with heartfelt care, ensuring every
              patient at Cedars Medicare feels supported, valued, and confident
              in their path to recovery.
            </p>
          </Slide>
        </div>
        <div className={`${cls.hide}`}>
          <JackInTheBox triggerOnce delay={400}>
            <ButtonAtom
              btnText="Book Appointment"
              iconRight={<ForwardArrowIcon size="20" />}
            />
          </JackInTheBox>
        </div>

        <div
          className={`${gbl.flex} ${gbl["gap-12"]} ${gbl["px-12"]} ${gbl["py-12"]} ${cls.stats}`}
        >
          <Fade direction="left" triggerOnce className={`${gbl["w-full"]}`}>
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
                        src={`/assets/images/avatar${index + 1}.webp`}
                        className={`${gbl["w-full"]} ${gbl["h-full"]}`}
                      />
                    </div>
                  );
                })}
            </div> */}
            </div>
          </Fade>
          <Fade direction="up" triggerOnce className={`${gbl["w-full"]}`}>
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
                        src={`/assets/images/doctor${index + 1}.webp`}
                        className={`${gbl["w-full"]} ${gbl["h-full"]}`}
                      />
                    </div>
                  );
                })}
            </div> */}
            </div>
          </Fade>
        </div>
      </div>
      <div
        className={`${gbl.flex} ${gbl["items-center"]} ${gbl["justify-center"]} ${cls.image} ${gbl["flex-1"]}`}
      >
        <div className={`${cls.mobile} ${gbl["w-full"]}`}>
          <div
            className={`${cls.review} ${gbl["w-full"]} ${gbl.flex} ${gbl["items-center"]} ${gbl["flex-col"]} ${gbl["justify-center"]} ${gbl["gap-4"]}`}
          >
            <div
              className={`${cls.stars} ${gbl.flex} ${gbl["items-center"]} ${gbl["gap-2"]}`}
            >
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <StarIcon key={index} size={"16"} color="var(--yellow)" />
                ))}
            </div>
            <p className={cls.rating}>5.0 (980 Reviews)</p>
            <h2>Innovative Healthcare Solutions for You</h2>
          </div>
        </div>
        <Image
          width={1920}
          height={1080}
          alt="cedars medicare"
          src={"/assets/images/doctor2.webp"}
        />
      </div>
    </main>
  );
};

export default HomeHeroTemplate;
