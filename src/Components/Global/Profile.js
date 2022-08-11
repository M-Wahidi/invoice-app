import React from "react";

function Profile({ setIsOpenProfile }) {
  return (
    <div
      onClick={() => setIsOpenProfile(true)}
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
        src={
          "https://isobarscience.com/wp-content/uploads/2020/09/default-profile-picture1.jpg"
        }
        alt="profilePicture"
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
