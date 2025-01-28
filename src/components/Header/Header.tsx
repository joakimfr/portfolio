import styles from './Header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <h2>&lt;J/F&gt;</h2>
      </div>
      <div className={styles.hamburger}>
        <div className={styles.lineLarge}></div>
        <div className={styles.lineSmall}></div>
        <div className={styles.lineLarge}></div>
      </div>
    </header>
  );
}
