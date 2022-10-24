import React, { useRef, useState } from 'react'
import styles from '../styles/Home.module.css'

const BitlyForm = () => {
  const [link, setLink] = useState<string>('')
  const [shortened, setShortened] = useState<string>('')
  const [isCopied, setIsCopied] = useState<boolean>(false)
  const [isLinkProcessing, setLinkProcessingStatus] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange = (e: any) => setLink(e.target.value); // form input assignment in react looks like this
  const handleSubmit = (e: any) => {
    // Send API request to local server to send request to bit.ly for generating short link 
    // * Sent to server intermediary for API token security
    // * We need not expose sensitive tokens to the public! 
    // validate link using regex before sending initial request . * confirm that user url is a valid URL
    if (/^(http|https):\/\/[^ "]+$/.test(link)) {
      getShortLink(link);
    } else {
      alert("Please enter a valid URL")
      if (inputRef.current) {
        inputRef.current.select();
        inputRef.current.focus();
      }
    }
    setIsCopied(false)
    e.preventDefault();
  }

  const handleCopy = (e: any) => {
    if (shortened !== '') {
      // Copy the text inside the text field
      navigator.clipboard.writeText(shortened);
      setIsCopied(true)
    }
  }

  const getShortLink = async (link: string) => {
    setLinkProcessingStatus(true)
    setIsCopied(false)
    await fetch(`api/shorten?URL=${link}`).then((data) => {
      return data.json();
    }).then((data) => {
      setLink('')
      setLinkProcessingStatus(false)
      setShortened(data.response.link)
      console.log(data.response)
    }).catch(err => {
      console.log("Error: ", err)
    })
  }

    return (
        <div className={styles.grid}>
            <span className={styles.inputSpan}>Shorten a link:{' '}</span>
            <form className={styles.shorteningForm} action="#" onSubmit={handleSubmit}>
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
            <p>{shortened || 'bit.ly/..'}</p>
            <small className={styles.decriptionInfo}><em>{isCopied ? 'Copied ✔️' : 'Click to copy 📋'}</em></small>
            </div>
        </div>
    )
}

export default BitlyForm