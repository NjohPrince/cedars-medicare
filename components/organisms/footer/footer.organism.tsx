import React from "react";
// import Image from "next/image";

import gbl from "../../../app/globals.module.css";
import cls from "./footer.module.css";

import ButtonAtom from "@/components/atoms/button/button.atom";
import ForwardArrowIcon from "@/components/icons/forward-arrow.icon";

const FooterOrganism = () => {
  return (
    <footer
      className={`${cls.footer} ${gbl["py-64"]} ${gbl["gap-48"]} ${gbl.px} ${gbl.flex} ${gbl["justify-between"]}`}
    >
      <div className={`${gbl.flex} ${gbl["gap-48"]}`}>
        <div
          className={`${cls.logo} ${gbl.flex} ${gbl["flex-col"]} ${gbl["gap-16"]}`}
        >
          <h2>CEDARS MEDICARE S.A.R.L</h2>
          <p>Innovative solutions for patient-centric healthcare services.</p>
          <p>
            &copy; {new Date().getFullYear()}. All rights
            reserved.
          </p>
          {/* <Image
          width={150}
          height={150}
          alt="cedars medicare logo"
          src={"/assets/images/cedars-logo.png"}
        /> */}
        </div>
        <div
          className={`${cls.logo} ${gbl.flex} ${gbl["flex-col"]} ${gbl["gap-16"]}`}
        >
          <h2>CONTACT US</h2>
          <div className={`${gbl.flex} ${gbl["flex-col"]} ${gbl["gap-8"]}`}>
            <p>+961 1 335 380/1 - +961 81 081 212</p>
            <p>info@cedarsmedicare.com</p>
          </div>
        </div>
      </div>
      <div
        className={`${cls.subscribe} ${gbl.flex} ${gbl["flex-col"]} ${gbl["gap-16"]}`}
      >
        <h2>SUBSCRIBE TO OUR NEWSLETTERS</h2>
        <div
          className={`${gbl.flex} ${gbl["w-full"]} ${gbl["flex-col"]} ${gbl["gap-8"]}`}
        >
          <input type="text" placeholder="Enter your email" />
          <ButtonAtom
            btnText="Subscribe"
            iconRight={<ForwardArrowIcon size="20" />}
          />
        </div>
      </div>
    </footer>
  );
};

export default FooterOrganism;
