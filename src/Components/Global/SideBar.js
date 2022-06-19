import React from "react";
import Logo from "../Global/Logo";
import Theme from "../Global/Theme";
import Profile from "../Global/Profile";
import useWindowDimensions from "../../CustomHooks/useWindowDimensions";
import { auth } from "../../API/firebaseconfig";
import { signOut } from "firebase/auth";
import { IoIosLogOut } from "react-icons/io";
function SideBar({ setIsOpenProfile }) {
  const { width } = useWindowDimensions();

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <div className={`${width < 950 ? "mobileNavSideBar" : "sidebar"}`}>
      <div
        className={` ${
          width < 950 ? "mobileNavUpperContainer" : "upper-container"
        }`}
      >
        <Logo />
      </div>

      <div
        className={` ${
          width < 950 ? "mobileNavLowerContainer" : "lower-container"
        }`}
      >
        <div
          onClick={handleSignOut}
          style={{
            color: "#fff",
            fontSize: "1.4rem",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <IoIosLogOut />
        </div>
        <div style={{ marginBottom: width < 950 ? "0" : ".5rem" }}>
          <Theme />
        </div>
        <Profile setIsOpenProfile={setIsOpenProfile} />
      </div>
    </div>
  );
}

export default SideBar;
