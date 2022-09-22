import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import styles from '../styles/Home.module.css'
import sanityClient from "../client.js"
import Project from '../components/project/project'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Flyt</title>
        <meta name="description" content="Interne prosjekter" />
        <link rel="icon" href="/flyt_logo.ico" />
      </Head>
      <Header></Header>
      <Project title="fagboka prosj"></Project>
      <Footer></Footer>
    </div>
  )
}

export default Home
