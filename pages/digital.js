import Head from 'next/head'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import DigitalPage from '../views/digitalPage/digitalPage'

export default function Digital() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Borgfy - Shaping Visions</title>
        <meta name="description" content="Generated by Borgfy" />
        <link rel="icon" href="/tab_icon.png" />
      </Head>

      <main>
        <DigitalPage/>
      </main>

      
    </div>
  )
}
