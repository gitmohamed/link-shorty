import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import BitlyForm from '../components/bitlyForm'
import Footer from '../components/footer'
import GithubIcon from '../components/github'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Link Shorty - Link shortener app made with Next.js</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GithubIcon />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Link Shorty{' '}
          <a target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/gitmohamed/link-shorty">
            By gitMohamed</a>
        </h1>
        <BitlyForm />
      </main>
      <Footer />
    </div>
  )
}

export default Home
