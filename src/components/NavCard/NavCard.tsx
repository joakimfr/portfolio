import styles from "./NavCard.module.scss";

export default function NavCard() {
  return (
    <nav className={styles.navCard}>
      <ul>
        <li>
          <a href="#about-me">
            <span>01</span> About Me
          </a>
        </li>
        <li>
          <a href="#projects">
            <span>02</span> My Projects
          </a>
        </li>
        <li>
          <a href="#resume">
            <span>03</span> Resume
          </a>
        </li>
        <li>
          <a href="#contact">
            <span>04</span> Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
