import Header from "@/components/Header/Header";
import NavCard from "@/components/NavCard/NavCard";
import styles from './page.module.scss'

export default function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <section className={styles.main}>
        <article className={styles.article}>
          <h1 className={styles.title}>Frontend Developer.</h1>
          <h2 className={styles.subTitle}>Joakim Fritz</h2>
          <p>Recent Frontend Developer graduate based in Jönköping, Sweden. Passionate about creating responsive and user-friendly web applications. Currently looking for exciting opportunities to bring my skills and creativity to the next level. .  </p>
        </article>
        <NavCard />
      </section>
    </div>
  );
}
