import React, { FC } from "react";
import Logo from "@/shared/Logo";
import MenuBar from "@/shared/MenuBar";

// import NotifyDropdown from "./NotifyDropdown";


import HeroSearchForm2MobileFactory from "../(HeroSearchForm2Mobile)/HeroSearchForm2MobileFactory";
import Link from "next/link";

import { Route } from "@/routers/types";


export interface MainNav2Props {
  className?: string;
}

const MainNav2: FC<MainNav2Props> = ({ className = "" }) => {
  return (
    <div className={`MainNav2 relative z-10 ${className}`}>
      <div className="px-4 h-20 lg:container flex justify-between">
        <div className="hidden md:flex justify-start flex-1 space-x-3 sm:space-x-8 lg:space-x-10">
          <Logo className="w-24 self-center" />
        </div>

        <div className="self-center lg:hidden flex-[3] max-w-lg !mx-auto md:px-3">
          <HeroSearchForm2MobileFactory />
        </div>

        <div className="hidden md:flex flex-shrink-0 justify-end flex-1 lg:flex-none text-neutral-700 dark:text-neutral-100">
          <div className="flex space-x-2 lg:hidden">
            <MenuBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav2;
