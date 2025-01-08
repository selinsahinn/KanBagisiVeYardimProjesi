import React from "react";

const Home = () => {
  return (
    <div style={styles.homeContainer}>
      <div style={styles.header}>
        <h2 style={styles.mainTitle}>Kan Bağışı Yap, Hayat Kurtar!</h2>
      </div>

      <div style={styles.banner}>
        <h3 style={styles.title}>Kan Bağışı Yap, Hayat Kurtar!</h3>
        <p style={styles.description}>
          Bir torba kan, üç hayatı kurtarabilir. Bugün bağış yapın ve fark
          yaratın!
        </p>
        <button style={styles.ctaButton}>Lütfen Bağış Yapalım!</button>
      </div>

      <div style={styles.stats}>
        <div style={styles.statCard}>
          <h3 style={styles.statTitle}>Bağışçı Sayısı</h3>
          <p style={styles.statValue}>2,500+</p>
        </div>
        <div style={styles.statCard}>
          <h3 style={styles.statTitle}>Hayat Kurtarılan</h3>
          <p style={styles.statValue}>7,500+</p>
        </div>
      </div>

      <footer style={styles.footer}>
        <p>&copy; 2025 Kan Bağışı Platformu</p>
      </footer>
    </div>
  );
};

const styles = {
  homeContainer: {
    fontFamily: "Arial, sans-serif",
    color: "#fff",
    backgroundColor: "#f44336",
    padding: "20px",
    textAlign: "center",
  },
  header: {
    backgroundColor: "#8b0000",
    padding: "30px",
    marginBottom: "40px",
    borderRadius: "10px",
  },
  mainTitle: {
    fontSize: "4rem",
    fontWeight: "bold",
    color: "#fff",
    textTransform: "uppercase",
    letterSpacing: "5px",
    textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
  },
  banner: {
    marginBottom: "40px",
    backgroundColor: "#8b0000",
    padding: "40px",
    borderRadius: "10px",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "bold",
    color: "#fff",
  },
  description: {
    fontSize: "1.2rem",
    marginTop: "10px",
    color: "#ffeb3b",
  },
  ctaButton: {
    marginTop: "20px",
    padding: "12px 24px",
    backgroundColor: "#ffeb3b",
    color: "#8b0000",
    fontSize: "1.2rem",
    fontWeight: "bold",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  stats: {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    marginTop: "40px",
  },
  statCard: {
    backgroundColor: "#d32f2f",
    padding: "20px",
    borderRadius: "10px",
    width: "200px",
  },
  statTitle: {
    fontSize: "1.5rem",
    marginBottom: "10px",
  },
  statValue: {
    fontSize: "2.5rem",
    fontWeight: "bold",
  },
  footer: {
    marginTop: "60px",
    backgroundColor: "#8b0000",
    padding: "10px",
    color: "#fff",
    borderRadius: "5px",
  },
};

export default Home;
