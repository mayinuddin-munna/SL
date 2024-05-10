import React, { FC } from "react";
import MainNav1 from "./MainNav";
import MainNav2 from "./MainNav2";

export interface HeaderProps {
  navType?: "MainNav1" | "MainNav2";
  className?: string;
}

const Header: FC<HeaderProps> = ({ navType = "MainNav", className = "" }) => {
  const renderNav = () => {
    switch (navType) {
      case "MainNav1":
        return <MainNav1 />;
      case "MainNav2":
        return <MainNav2 />;
    }
  };

  return (
    <div
      className={`nc-Header sticky top-0 w-full left-0 right-0 z-40 nc-header-bg ${className}`}
    >
      {renderNav()}
    </div>
  );
};

export default Header;
