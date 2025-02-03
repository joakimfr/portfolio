import styles from "./NavCard.module.scss";

export default function NavCard() {
  return (
    <nav className={styles.navCard}>
      <ul>
        <li>
          <a href="#about-me">
            <h2>01. About me</h2>
            <div className={styles.line}></div>
          </a>
        </li>
        <li>
          <a href="#projects">
            <h2>02. My projects</h2>
            <div className={styles.lineRight}></div>
          </a>
        </li>
        <li>
          <a className={styles.alist} href="#resume">
            <h2>03. Resume</h2>
            <div className={styles.line}></div>
          </a>
        </li>
        <li>
          <a href="#contact">
            <h2>04. Contact me</h2>
            <div className={styles.lineRight}></div>
          </a>
        </li>
      </ul>
    </nav>
  );
}
