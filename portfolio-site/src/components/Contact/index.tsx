import React, { useEffect, useRef, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import '../Layout/index.scss'
import emailjs from '@emailjs/browser'
import yorksketch from '../../assets/images/yorksketch.png'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState<string>('text-animate')
  const [sendDisabled, setSendDisabled] = useState<boolean>(false)
  const form = useRef<any>(null)

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e: any) => {
    e.preventDefault()
    setSendDisabled(true)

    emailjs
      .sendForm(
        'service_a3ywar8',
        'template_31zoo9b',
        form.current,
        '4qBCRMbIPH5meWdrw'
      )
      .then(() => {
        alert('Message sent!')
        window.location.reload()
      })
      .catch((err) => {
        console.log(err)
        alert('Message failed - please try again later.')
      })
    setSendDisabled(false)
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't']}
              idx={15}
            />
          </h1>
          <p>Give this a try.</p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <div className="form-top">
                  <li className="half">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                    />
                  </li>
                  <li className="half">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                    />
                  </li>
                  <li>
                    <input
                      placeholder="Subject"
                      type="text"
                      name="subject"
                      required
                    />
                  </li>
                </div>
                <div className="form-bottom">
                  <li>
                    <textarea
                      placeholder="Message"
                      name="message"
                      required
                    ></textarea>
                  </li>
                  <li>
                    <input
                      type="submit"
                      className="flat-button"
                      value="SEND"
                      disabled={sendDisabled}
                    />
                  </li>
                </div>
              </ul>
            </form>
          </div>
        </div>
        <div className="york">
          York, UK
          <div className="york-sketch">
            <img src={yorksketch} />
          </div>
        </div>
      </div>
      <Loader type="pacman" active={true} />
    </>
  )
}

export default Contact
