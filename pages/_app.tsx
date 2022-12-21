import React from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function linkShorty({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default linkShorty
