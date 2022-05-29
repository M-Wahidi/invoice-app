import React from "react";
import defaultImage from "../../Assets/default-profile-picture.png";

function Profile() {
  return (
    <div
      className="profile-image"
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
        src={defaultImage}
        alt="default"
        style={{
          width: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
}

export default Profile;
