import React from "react";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <div className="max-width">Header</div>
    </header>
  );
}

export default Header;
