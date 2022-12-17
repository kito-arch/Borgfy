import Head from 'next/head'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import VenturePage from '../views/venturePage/venturePage'

export default function Venture() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Borgfy - Shaping Visions</title>
        <meta name="description" content="Generated by Borgfy" />
        <link rel="icon" href="/tab_icon.png" />
      </Head>

      <main>
        <VenturePage/>
      </main>

      
    </div>
  )
}
