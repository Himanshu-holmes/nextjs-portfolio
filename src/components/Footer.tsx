import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="text-white/75 flex justify-between py-6">
      <div>
        <p>Copyright © 2024 Himanshu Kumar.</p>
        <p>All rights reserved.</p>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <Link
          href="https://www.linkedin.com/in/himanshu-kumar-00538821b/"
          target="_blank"
          className="hover:text-white/50"
        >
          Linkedin
        </Link>
        <Link
          href="https://github.com/Himanshu-holmes"
          target="_blank"
          className="hover:text-white/50"
        >
          Github
        </Link>
        <Link
          href="mailto:himanshuholmes@gmail.com"
          target="_blank"
          className="hover:text-white/50"
        >
          Email
        </Link>
        <Link
          href="https://x.com/Himanshu_holmes"
          target="_blank"
          className="hover:text-white/50"
        >
          Twitter
        </Link>
        <Link
          href="https://drive.google.com/file/d/1xe-W1Fqm0CrXi3xa-uh1F1Sp4i3C98Z-/view?usp=sharing"
          target="_blank"
          className="hover:text-white/50"
        >
          Resume
        </Link>
      </div>
    </div>
  );
};

export default Footer;
