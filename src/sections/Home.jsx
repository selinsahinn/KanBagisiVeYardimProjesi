import React from "react";

const Home = () => {
  return (
    <div style={styles.homeContainer}>
      <header style={styles.header}>
        <h1 style={styles.mainTitle}>Kan Bağışı Yap, Hayat Kurtar!</h1>
        <p style={styles.subtitle}>Bir damla kan, bin umut demektir.</p>
      </header>

      <section style={styles.banner}>
        <h2 style={styles.bannerTitle}>Bugün Bağış Yapın</h2>
        <p style={styles.bannerDescription}>
          Kan bağışı yaparak ihtiyaç sahibi insanlara umut olabilirsiniz. Hemen
          en yakın kan bağışı merkezine gidin veya randevu alın.
        </p>
        <button style={styles.ctaButton}>Bağış Yapalım!</button>
      </section>

      <section style={styles.statistics}>
        <div style={styles.statCard}>
          <h3 style={styles.statNumber}>2,500+</h3>
          <p style={styles.statLabel}>Bağışçı</p>
        </div>
        <div style={styles.statCard}>
          <h3 style={styles.statNumber}>7,500+</h3>
          <p style={styles.statLabel}>Hayat Kurtarılan</p>
        </div>
        <div style={styles.statCard}>
          <h3 style={styles.statNumber}>1,200+</h3>
          <p style={styles.statLabel}>Bağış Merkezi</p>
        </div>
      </section>

      <footer style={styles.footer}>
        <p>&copy; 2025 Kan Bağışı Platformu | Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
};

const styles = {
  homeContainer: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#333",
    backgroundColor: "#f9f9f9",
    padding: "20px",
    textAlign: "center",
  },
  header: {
    backgroundColor: "#e53935",
    color: "#fff",
    padding: "60px 20px",
    borderRadius: "10px",
    marginBottom: "40px",
  },
  mainTitle: {
    fontSize: "3rem",
    margin: "0",
    fontWeight: "700",
  },
  subtitle: {
    fontSize: "1.2rem",
    marginTop: "10px",
  },
  banner: {
    backgroundColor: "#ffffff",
    padding: "40px 20px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    marginBottom: "40px",
  },
  bannerTitle: {
    fontSize: "2rem",
    color: "#e53935",
    marginBottom: "20px",
  },
  bannerDescription: {
    fontSize: "1rem",
    color: "#555",
    marginBottom: "30px",
    maxWidth: "600px",
    margin: "0 auto 30px",
  },
  ctaButton: {
    padding: "12px 30px",
    backgroundColor: "#e53935",
    color: "#fff",
    fontSize: "1rem",
    fontWeight: "600",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  statistics: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap",
    marginBottom: "40px",
  },
  statCard: {
    backgroundColor: "#fff",
    padding: "30px 20px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    flex: "1 1 200px",
    maxWidth: "250px",
  },
  statNumber: {
    fontSize: "2.5rem",
    color: "#e53935",
    margin: "0",
  },
  statLabel: {
    fontSize: "1rem",
    color: "#777",
    marginTop: "10px",
  },
  footer: {
    backgroundColor: "#e53935",
    color: "#fff",
    padding: "20px",
    borderRadius: "5px",
  },
};

export default Home;
