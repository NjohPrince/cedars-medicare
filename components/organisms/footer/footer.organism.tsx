import React from "react";
import Link from "next/link";
// import Image from "next/image";

import gbl from "../../../app/globals.module.css";
import cls from "./footer.module.css";

import ButtonAtom from "@/components/atoms/button/button.atom";
import ForwardArrowIcon from "@/components/icons/forward-arrow.icon";
import FacebookIcon from "@/components/icons/facebook.icon";
import InstagramIcon from "@/components/icons/instagram.icon";
import LinkedinIcon from "@/components/icons/linkedin.icon";
import WhatsappIcon from "@/components/icons/whatsapp.icon";

const FooterOrganism = () => {
  return (
    <footer
      className={`${cls.footer} ${gbl["py-64"]} ${gbl["gap-48"]} ${gbl.px} ${gbl.flex} ${gbl["justify-between"]}`}
    >
      <div className={`${gbl.flex} ${gbl["gap-48"]} ${cls.group}`}>
        <div
          className={`${cls.logo} ${gbl.flex} ${gbl["flex-col"]} ${gbl["gap-16"]}`}
        >
          <h2>Cedars Medicare S.A.R.L</h2>
          <p>Innovative solutions for patient-centric healthcare services.</p>
          <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
          {/* <Image
          width={150}
          height={150}
          alt="cedars medicare logo"
          src={"/assets/images/cedars-logo.png"}
        /> */}

          <div className={`${gbl.flex} ${cls.social} ${gbl["gap-16"]}`}>
            <Link
              href={"https://www.facebook.com/cedarsmedicare.official"}
              aria-label="facebook profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <FacebookIcon />
              </span>
            </Link>
            <Link
              href={"https://www.instagram.com/cedars.medicare"}
              aria-label="instagram profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <InstagramIcon />
              </span>
            </Link>
            <Link
              href={"https://www.linkedin.com/company/cedars-medicare/"}
              aria-label="linkedin profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <LinkedinIcon />
              </span>
            </Link>
            <Link
              href={"https://wa.me/+96181081212"}
              aria-label="whatsapp contact"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <WhatsappIcon />
              </span>
            </Link>
          </div>
        </div>
        <div
          className={`${cls.logo} ${gbl.flex} ${gbl["flex-col"]} ${gbl["gap-16"]}`}
        >
          <h2>Contact Us</h2>
          <div className={`${gbl.flex} ${gbl["flex-col"]} ${gbl["gap-8"]}`}>
            <p>+961 1 335 380 / +961 81 081 212</p>
            <p>info@cedarsmedicare.com</p>
          </div>
        </div>
      </div>
      <div
        className={`${cls.subscribe} ${gbl.flex} ${gbl["flex-col"]} ${gbl["gap-16"]}`}
      >
        <h2>Subscribe to Our Newsletter</h2>
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
