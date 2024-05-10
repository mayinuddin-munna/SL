"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useThemeMode } from "@/utils/useThemeMode";
import MainNav1 from "./MainNav";

export type SiteHeaders = "Header 1";


let OPTIONS = {
  root: null,
  rootMargin: "0px",
  threshold: 1.0,
};
let OBSERVER: IntersectionObserver | null = null;


const SiteHeader = () => {
  const anchorRef = useRef<HTMLDivElement>(null);

  const [headerSelected, setHeaderSelected] = useState<SiteHeaders>("Header 1");

  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    setIsTopOfPage(window.pageYOffset < 5);
  }, []);
  //
  useThemeMode();
  //
  const pathname = usePathname();

  const intersectionCallback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      setIsTopOfPage(entry.isIntersecting);
    });
  };

  useEffect(() => {
    if (!OBSERVER) {
      OBSERVER = new IntersectionObserver(intersectionCallback, OPTIONS);
      anchorRef.current && OBSERVER.observe(anchorRef.current);
    }
  }, [pathname]);


  const renderHeader = () => {
    let headerClassName = "shadow-sm dark:border-b dark:border-neutral-700";
    
    switch (headerSelected) {
      case "Header 1":
        return <MainNav1 className={headerClassName} navType="MainNav1" />;
    }
  };

  return (
    <>
      {renderHeader()}
      <div ref={anchorRef} className="h-1 absolute invisible"></div>
    </>
  );
};

export default SiteHeader;
