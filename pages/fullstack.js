import Head from 'next/head'
import styles from '../styles/Home.module.css'
import FullStackPage from '../views/fullStackPage/fullStackPage'

export default function Digital() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <FullStackPage/>
      </main>

      
    </div>
  )
}
