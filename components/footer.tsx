import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
        <a
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/Nextjs-logo.svg" alt="NextJS Logo" width={193} height={110} />
          </span> & bit.ly
        </a>
        <small>
          By clicking SHORTEN, you are agreeing to Bitly’s Terms of Service
          and Privacy Policy
        </small>
      </footer>
    )
}

export default Footer