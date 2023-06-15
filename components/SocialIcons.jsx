import { FacebookLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";
import React from "react";

function SocialIcons() {
  return (
    <div className="flex justify-center items-center gap-5">
      <a
        href="https://www.facebook.com/subhamchakraborty95/"
        target="_blank"
        className="text-white"
      >
        <FacebookLogo className="h-8 w-8" />
      </a>

      <a
        href="https://www.instagram.com/subhamcby/"
        target="_blank"
        className="text-white"
      >
        <InstagramLogo className="h-8 w-8" />
      </a>

      <a
        href="https://www.aedin.com/in/subham-chakraborty-sc/"
        target="_blank"
        className="text-white"
      >
        <LinkedinLogo className="h-8 w-8" />
      </a>
    </div>
  );
}

export default SocialIcons;
