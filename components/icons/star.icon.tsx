import React from "react";

import { IconProps } from "@/types/icon.type";

const StarIcon = ({ color, size = "24" }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.5946 2.30821L8.76038 8.05474L2.41924 8.97922C1.28208 9.14415 0.826355 10.5461 1.65101 11.349L6.23868 15.8195L5.15361 22.1346C4.9583 23.2761 6.16056 24.1311 7.1675 23.5973L12.8402 20.6155L18.513 23.5973C19.5199 24.1268 20.7222 23.2761 20.5269 22.1346L19.4418 15.8195L24.0295 11.349C24.8541 10.5461 24.3984 9.14415 23.2612 8.97922L16.9201 8.05474L14.0859 2.30821C13.5781 1.28391 12.1067 1.27089 11.5946 2.30821Z"
        fill={color || "var(--yellow)"}
      />
    </svg>
  );
};

export default StarIcon;
