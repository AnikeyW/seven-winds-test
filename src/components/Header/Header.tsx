import React from "react";
import styles from "./Header.module.scss";
import menuIcon from "../../assets/menu-icon.png";
import backIcon from "../../assets/back-ivon.png";
const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.icon}>
        <img src={menuIcon} alt="menu" />
      </div>
      <div className={styles.icon}>
        <img src={backIcon} alt="back" />
      </div>
      <nav className={styles.navlinks}>
        <div className={`${styles.link} ${styles.active}`}>Просмотр</div>
        <div className={`${styles.link}`}>Управление</div>
      </nav>
    </div>
  );
};

export default Header;
