import Head from 'next/head'
import styles from '../styles/Home.module.css'
import PortfolioPage from '../views/portfolioPage/portfolioPage'



export default function Portfolio() {


  return (
    <div className={styles.container}>
      <Head>
        <title>Borgfy</title>
        <meta name="description" content="Generated by Borgfy" />
        <link rel="icon" href="/logo_white.png" />
      </Head>

      <main>
        <PortfolioPage/>
      </main>

      
    </div>
  )
}
