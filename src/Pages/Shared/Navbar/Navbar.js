import React from "react";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h3 style={styles.logo}>Hotel RainTree</h3>
      <ul style={styles.navLinks}>
        <li style={styles.navItem}>
          <a href="#" style={styles.navLink}>
            Home
          </a>
        </li>
        <li style={styles.navItem}>
          <a href="#" style={styles.navLink}>
            About
          </a>
        </li>
        <li style={styles.navItem}>
          <a href="#" style={styles.navLink}>
            Services
          </a>
        </li>
        <li style={styles.navItem}>
          <a href="#" style={styles.navLink}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
    background: "#333",
    color: "#fff",
  },
  logo: {
    fontSize: "1.5rem",
    margin: 0,
  },
  navLinks: {
    display: "flex",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: "0 1rem",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

// Media query for tablet devices
const tablet = "@media only screen and (max-width: 960px)";

const stylesWithMediaQueries = {
  ...styles,
  nav: {
    ...styles.nav,
    flexDirection: "column",
    [tablet]: {
      padding: "1rem 0",
    },
  },
  navLinks: {
    ...styles.navLinks,
    flexDirection: "column",
  },
  navItem: {
    ...styles.navItem,
    margin: "1rem 0",
  },
};

export default Navbar;
