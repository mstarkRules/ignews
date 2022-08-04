import { GetStaticProps } from "next";
import Head from "next/head";
import { getPrismicClient } from "../../services/prismic";
import Prismic from "@prismicio/client";

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

//util porque vamos precisar buscar os dados de posts apenas umas vez
//depois não precisamos ficar indo na api do prismic buscar novamente

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.predicates.at("document.type", "my-custom-post")],
    {
      fetch: ["my-custom-post.title", "my-custom-post.content"],
      pageSize: 100,
    }
  );

  console.log("dados response: ", JSON.stringify(response, null, 2));

  return {
    props: {},
  };
};
