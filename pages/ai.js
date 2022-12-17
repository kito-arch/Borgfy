import Head from 'next/head'
import styles from '../styles/Home.module.css'
import AIPage from '../views/aiPage/aiPage'


export default function AI() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Borgfy - Shaping Visions</title>
        <meta name="description" content="Generated by Borgfy" />
        <link rel="icon" href="/tab_icon.png" />
      </Head>

      <main>
        <AIPage/>
      </main>

      
    </div>
  )
}
