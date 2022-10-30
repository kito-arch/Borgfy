import Head from 'next/head'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import DigitalPage from '../views/digitalPage/digitalPage'

export default function Digital() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <DigitalPage/>
      </main>

      
    </div>
  )
}