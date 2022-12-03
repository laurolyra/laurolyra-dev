import Head from 'next/head';
import { Bio } from '../components/Bio';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Lauro Lyra Aguiar | laurolyra.dev</title>
          <meta
            name="description"
            content="Web development posts, portfolio and learn in public posts"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <Bio />
        </main>
      </div>
    </>
  );
}
