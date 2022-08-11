import React from "react";

function ProfilePage({ setIsOpenProfile }) {
  return (
    <div
      className="profile-overlay"
      onClick={() => setIsOpenProfile(false)}
      style={{
        backgroundColor: "rgba(0, 0, 0,0.7)",
        position: "fixed",
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
        onClick={(e) => e.stopPropagation()}
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
          src="https://isobarscience.com/wp-content/uploads/2020/09/default-profile-picture1.jpg"
          alt="img"
        />
        <h2 style={{ color: "#fff" }}>.</h2>
        <div style={{ textAlign: "center", paddingTop: "1rem" }}>
          <h4>
            <a
              href="https://github.com/M-Wahidi"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#fff", textDecoration: "underline" }}
            >
              Visit Github
            </a>
          </h4>
          <h4 style={{ marginTop: "1rem" }}>
            <a
              href="https://www.frontendmentor.io/challenges/invoice-app-i7KaLTQjl"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#fff", textDecoration: "underline" }}
            >
              Challenge Page
            </a>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
