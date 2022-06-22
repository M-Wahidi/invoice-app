import React, { useState } from "react";
import Logo from "../Global/Logo";
import Theme from "../Global/Theme";
import Profile from "../Global/Profile";
import useWindowDimensions from "../../CustomHooks/useWindowDimensions";
import { auth } from "../../API/firebaseconfig";
import { signOut } from "firebase/auth";
import { IoIosLogOut } from "react-icons/io";
import Modal from "./Modal";
function SideBar({ setIsOpenProfile, setOpenForm, setLoading }) {
  const { width } = useWindowDimensions();
  const [openModal, setOpenModal] = useState(false);

  const handleSignOut = () => {
    setLoading(true);
    setTimeout(() => {
      signOut(auth);
      setOpenForm(false);
      setLoading(false);
    }, 500);
  };

  return (
    <div className={`${width < 950 ? "mobileNavSideBar" : "sidebar"}`}>
      <div className={` ${width < 950 ? "mobileNavUpperContainer" : "upper-container"}`}>
        <Logo />
      </div>

      {openModal && (
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            left: 0,
            top: 0,
            zIndex: 2,
          }}
        >
          <Modal type='logout' openModal={openModal} setOpenModal={setOpenModal} handleSignOut={handleSignOut} />
        </div>
      )}

      <div className={` ${width < 950 ? "mobileNavLowerContainer" : "lower-container"}`}>
        <div
          onClick={() => setOpenModal(true)}
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
