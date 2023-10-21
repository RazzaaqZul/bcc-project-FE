import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets";
import { footerLinks, socialMedias } from "../constants";

const Footer = () => {
  return (
    <section>
      {/* Footer 1 */}
      <div className="flex justify-end items-center bg-dimGreen border-b-2 border-neutral-200 gap-7 py-7 px-[90px] ">
        <div className="font-bold text-white font-inter hover:text-green40 duration-500">
          Follow Us
        </div>
        <div className="flex flex-row gap-8 ">
          {socialMedias.map((socialMedia, i) => (
            <li
              key={`social-media-key-${i}`}
              className="list-none cursor-pointer"
            >
              <img
                className="w-[35px] h-[35px] hover:scale-125  duration-300"
                src={socialMedia.icon}
              ></img>
            </li>
          ))}
        </div>
      </div>

      {/* Footer 2 */}
      <div className="flex justify-start bg-dimGreen  text-white py-5 px-[90px] gap-40">
        {footerLinks.map((footerlink, i) => (
          <div key={`footer-link-key-${i}`} className="p-4">
            {footerlink.links.map((link, i) => (
              <li
                key={`link-key-${i}`}
                className="list-none my-1 font-inter cursor-pointer hover:text-green40 duration-300"
              >
                {link.name}
              </li>
            ))}
          </div>
        ))}
      </div>
      {/* footer 3 */}
      <div className="flex justify-between bg-dimGreen py-8 px-[90px]">
        <div>
          <img src={logo}></img>
        </div>
        <div className="font-bold text-white font-inter">
          @ 2023 Easy Meal, Inc.
        </div>
      </div>
    </section>
  );
};

export default Footer;
