import styles from "./MyProjects.module.scss";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

export default function MyProjects() {
  return (
    <section className={styles.main}>
      <div className={styles.title}>
        <h1>Some of my projects</h1>
      </div>
      <div className={styles.projectCard}>
        <div className={styles.textContainer}>
          <h2>Projekt-app</h2>
          <p>
            I am developing a project management app for construction projects.
            The app allows users to create and manage projects, each containing
            different metal profiles (sheet metal components) used in
            construction, such as base plates, wall brackets, and window sills.
            Users can add, edit, and organize these profiles within their
            projects, making it easier to track materials and ensure efficient
            project planning.
          </p>
          <a
            href="https://github.com/ditt-github-repo" 
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubLink}
          >
            <FaGithub size={24} /> View on GitHub
          </a>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/plateApp.png"
            alt="Project 1"
            fill
            style={{ objectFit: "cover", borderRadius: "20px" }}
          />
        </div>
      </div>
      <div className={styles.projectCard}>
        <div className={styles.textContainer}>
          <h2>Rating Chart</h2>
          <p>
            Under my internship at Coin360, I developed and implemented a rating
            chart to manage and display their data across various top lists. This
            was one of many tasks I worked on for their website.
          </p>
          <a
            href="https://coin360.com" // Länk till Coin360:s hemsida
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubLink}
          >
            Visit Webpage
          </a>
        </div>
        <div className={styles.imageWrapperWide}>
          <Image
            src="/images/chart.png"
            alt="Project 1"
            fill
            style={{ objectFit: "cover", borderRadius: "20px" }}
          />
        </div>
      </div>
    </section>
  );
}