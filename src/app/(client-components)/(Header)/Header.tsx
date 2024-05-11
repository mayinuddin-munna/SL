"use client";

import React, { useRef } from "react";
import { useThemeMode } from "@/utils/useThemeMode";
import MainNav from "./Nav";

const SiteHeader = () => {
  const anchorRef = useRef<HTMLDivElement>(null);
 
  useThemeMode();

  return (
    <>
      <MainNav className="shadow-sm dark:border-b dark:border-neutral-700" />
      <div ref={anchorRef} className="h-1 absolute invisible"></div>
    </>
  );
};

export default SiteHeader;
