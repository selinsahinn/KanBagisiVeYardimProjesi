import React, { useState } from "react";
import flag from "../assets/flag.svg";
import profile from "../assets/profile.svg";

const Header = () => {
  const [isProfileHovered, setIsProfileHovered] = useState(false);

  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <img src={flag} alt="bayrak" style={styles.flag} />
        <h1 style={styles.title}>Kan ve Yardım Projesi</h1>
      </div>
      <div style={styles.profileContainer}>
        <img
          src={profile}
          alt="Profil"
          style={{
            ...styles.profile,
            ...(isProfileHovered ? styles.profileHovered : {}),
          }}
          onMouseEnter={() => setIsProfileHovered(true)}
          onMouseLeave={() => setIsProfileHovered(false)}
        />
      </div>
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    borderBottom: "2px solid #e0e0e0",
    backgroundColor: "#ffffff",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    position: "sticky",
    top: "0",
    zIndex: "1000",
    transition: "background-color 0.3s",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  flag: {
    width: "25px",
    height: "25px",
  },
  title: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    fontSize: "1.5rem",
    fontWeight: "600",
    color: "#e53935",
  },
  profileContainer: {
    display: "flex",
    alignItems: "center",
  },
  profile: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    objectFit: "cover",
    cursor: "pointer",
    transition: "transform 0.3s, box-shadow 0.3s",
  },
  profileHovered: {
    transform: "scale(1.05)",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
};

export default Header;
