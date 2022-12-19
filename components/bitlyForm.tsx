'use client';

import React, { useRef, useState } from 'react'
import styles from '../styles/Home.module.css'
import getShortLink from './utils/getShortLink'

const BitlyForm = () => {
  const [link, setLink] = useState<string>('')
  const [shortened, setShortened] = useState<string>('')
  const [isCopied, setIsCopied] = useState<boolean>(false)
  const [isLinkProcessing, setLinkProcessingStatus] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange = (e: any) => setLink(e.target.value); // form input assignment in react looks like this
  const handleSubmit = (e: any) => {
    // Send API request to local server which sends request to bit.ly for generating short link 
    // * This is neccessary for API token security 
    // validate link using regex before sending initial request . * confirm that user url is a valid URL
    if (/^(http|https):\/\/[^ "]+$/.test(link)) {
      // once valid link format inputed -> attempt to process link shortening method
      try {
        setIsCopied(false)
        setLinkProcessingStatus(true)
        getShortLink(link).then((shortLink) => {
          setShortened(shortLink)
          setLink('')
          setLinkProcessingStatus(false)
        }).catch((err) => {
          console.log("Error: ", err)
          setShortened("An error occured")
          setLinkProcessingStatus(false)
        })
      } catch (error) {
        console.log("Error: ", error)
      }
    } else {
      // invalid link format
      alert("Please enter a valid URL")
      if (inputRef.current) {
        inputRef.current.select();
        inputRef.current.focus();
      }
      setIsCopied(false)
    }
    e.preventDefault();
  }

  const handleCopy = (e: any) => {
    if (shortened !== '') {
      // Copy the text inside the short link [description] field
      navigator.clipboard.writeText(shortened);
      setIsCopied(true)
    }
  }

    return (
        <div className={styles.grid}>
            <span className={styles.inputSpan}>Shorten a link:{' '}</span>
            <form className={styles.shorteningForm} action="#" onSubmit={handleSubmit} data-testid="shortening-form">
              <input 
                  id='linkInput' 
                  ref={inputRef} 
                  onChange={handleChange} 
                  type="text" 
                  autoComplete="off"
                  required
                  value={link} 
                  className={styles.longLink}
                  placeholder='https://mobile.facelook.com/superduperfacelookpage...' /><br />
              <input className={styles.submitBtn} type="submit" disabled={isLinkProcessing} value={isLinkProcessing ? 'Processing...' : 'Shorten'} />
            </form>
            <div onClick={handleCopy} className={styles.description}>
              <p data-testid="new-link">{shortened || 'bit.ly/..'}</p>
              <small className={styles.decriptionInfo}><em>{isCopied ? 'Copied ✔️' : 'Click to copy 📋'}</em></small>
            </div>
        </div>
    )
}

export default BitlyForm