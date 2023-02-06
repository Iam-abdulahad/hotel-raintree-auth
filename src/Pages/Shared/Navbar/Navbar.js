import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h3 style={styles.logo}>Digital Fashion</h3>
      <ul style={styles.navLinks}>
        <li style={styles.navItem}>
          <Link to='/home' style={styles.navLink}>Home</Link>
        </li>
        <li style={styles.navItem}>
          <Link to='/about' style={styles.navLink}>About</Link>
        </li>
        <li style={styles.navItem}>
          <Link to='/rooms' style={styles.navLink}>Rooms</Link>
        </li>
        <li style={styles.navItem}>
          <Link to='/login' style={styles.navLink}>Login</Link>
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
