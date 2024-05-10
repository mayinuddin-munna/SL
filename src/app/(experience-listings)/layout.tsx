
import BgGlassmorphism from "@/components/BgGlassmorphism";
import React, { ReactNode } from "react";


const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={`nc-ListingStayPage relative `}>
      <BgGlassmorphism />

      

      {children}

     
    </div>
  );
};

export default Layout;
