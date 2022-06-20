import React from "react";
import { auth } from "../../API/firebaseconfig";
import defaultImage from "../../Assets/default-profile-picture.png";

function Profile({ setIsOpenProfile }) {
  return (
    <div
      onClick={() => setIsOpenProfile(true)}
      className='profile-image'
      style={{
        width: "50px",
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        paddingTop: "5px",
      }}
    >
      <img
        src={auth.currentUser.photoURL || defaultImage}
        alt='default'
        style={{
          width: "100%",
          objectFit: "cover",
          borderRadius: "50%",
        }}
      />
    </div>
  );
}

export default Profile;
