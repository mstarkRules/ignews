import Head from "next/head";
import styles from "./styles.module.scss";

export default function Posts() {
  return (
    <>
      <Head>Posts | Ignews</Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="">
            <time>4 de janeiro de 2022</time>
            <strong>How I code for 8 hours without feeling tired</strong>
            <p>
              I thought it was okay to just sit down at my desk, open my laptop,
              take a task from my To-Do list, and code until I felt tired.
            </p>
          </a>
          <a href="">
            <time>4 de janeiro de 2022</time>
            <strong>How I code for 8 hours without feeling tired</strong>
            <p>
              I thought it was okay to just sit down at my desk, open my laptop,
              take a task from my To-Do list, and code until I felt tired.
            </p>
          </a>
          <a href="">
            <time>4 de janeiro de 2022</time>
            <strong>How I code for 8 hours without feeling tired</strong>
            <p>
              I thought it was okay to just sit down at my desk, open my laptop,
              take a task from my To-Do list, and code until I felt tired.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
