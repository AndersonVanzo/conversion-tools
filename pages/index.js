import Head from 'next/head';
import styles from '../styles/styles.module.scss';

export default function Index() {
  return (
    <div>
      <Head>
        <title>Converion Tools - Home</title>
        <meta name='description' content='Ferramenta de conversão feita em React com Next.js' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <div className={styles.header}>
          <h1 className={styles.header__title}>Conversion Tools</h1>
        </div>
        <div className={styles.wave}></div>
      </main>
    </div>
  );
}