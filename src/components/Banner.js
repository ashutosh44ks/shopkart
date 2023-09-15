import React from "react";
import brandStar from "../assets/brand-star.svg";
import brandFace from "../assets/brand-face.svg";
import { ReactComponent as ExtLink } from "../assets/external-link.svg";
import navbarSeparatorIcon from "../assets/navbar-separator.svg";

const Banner = () => {
  return (
    <section
      className="banner px-8 xs:px-16 py-8 2xl:py-16"
      style={{
        height: "calc(100vh - 8rem)",
      }}
    >
      <div className="w-2/3 banner-text">
        <h1>FRESH</h1>
        <h1 className="text-right mr-16 outline-only">2022</h1>
        <h1 className="ml-16">LOOK</h1>
      </div>
      <>
        <img src={brandStar} alt="brandStar" className="brand-star" />
        <img src={brandFace} alt="brandFace" className="brand-face" />
        <div className="brand-price hide-on-mobile">
          <span>OREGON JACKET</span>
          <span>$124</span>
        </div>
      </>
      <div className="orange-box" />
      <div className="banner-end">
        <img src={navbarSeparatorIcon} alt="navbar-separator" />
        <span className="flex gap-2 items-center px-8 py-2 cursor-pointer">
          See more
          <ExtLink />
        </span>
      </div>
    </section>
  );
};

export default Banner;
