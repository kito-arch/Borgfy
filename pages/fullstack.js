import Head from 'next/head'
import styles from '../styles/Home.module.css'
import FullStackPage from '../views/fullStackPage/fullStackPage'

export default function Digital() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Borgfy</title>
        <meta name="description" content="Generated by Borgfy" />
        <link rel="icon" href="/logo_white.png" />
      </Head>

      <main>
        <FullStackPage/>
      </main>

      
    </div>
  )
}
