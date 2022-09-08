import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Calendar from '../components/Calendar'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pill Kusa</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Calendar></Calendar>
    </div>
  )
}

export default Home
