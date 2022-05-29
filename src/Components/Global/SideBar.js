import React from "react";
import Logo from "../Global/Logo";
import Theme from "../Global/Theme";
import Profile from "../Global/Profile";
import useWindowDimensions from "../../CustomHooks/useWindowDimensions";
function SideBar() {
  const { width } = useWindowDimensions();

  return (
    <div className={`${width < 768 ? "mobileNavSideBar" : "sidebar"}`}>
      <div
        className={` ${
          width < 768 ? "mobileNavUpperContainer" : "upper-container"
        }`}
      >
        <Logo />
      </div>

      <div
        className={` ${
          width < 768 ? "mobileNavLowerContainer" : "lower-container"
        }`}
      >
        <Theme />
        <Profile />
      </div>
    </div>
  );
}

export default SideBar;
