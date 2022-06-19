import React from "react";

function ProfilePage({ setIsOpenProfile }) {
  return (
    <div
      onClick={setIsOpenProfile(false)}
      style={{
        backgroundColor: "rgba(0, 0, 0,0.7)",
        backdropFilter: "blur(5px)",
        position: "absolute",
        left: 0,
        top: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        zIndex: 9999,
      }}
    >
      <div
        onClick={(e) => e.preventDefault()}
        className="profile-page-container"
        style={{
          position: "absolute",
          width: "300px",
          height: "300px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          style={{
            objectFit: "cover",
            width: "40%",
            height: "40%",
            borderRadius: "50%",
          }}
          src="https://sempreinter.com/wp-content/uploads/2022/04/Lautaro-Martinez-scaled-e1650407368974.jpg"
          alt="img"
        />
        <h2 style={{ color: "#fff" }}>.</h2>
        <div style={{ textAlign: "center", paddingTop: "1rem" }}>
          <h4>
            <a
              href="https://www.google.com"
              src="test"
              style={{ color: "#fff" }}
            >
              Visit Git repo
            </a>
          </h4>
          <h4 style={{ marginTop: "1rem" }}>
            <a
              href="https://www.google.com"
              src="test"
              style={{ color: "#fff" }}
            >
              Visit solution page
            </a>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
