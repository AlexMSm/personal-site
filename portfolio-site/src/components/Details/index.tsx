import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import tsLogo from '../../assets/images/typescript_logo.png'
import pythonLogo from '../../assets/images/python_logo.png'
import React, { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Loader from 'react-loaders'

const Details = () => {
  const [letterClass, setLetterClass] = useState<string>('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container details-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['D', 'e', 't', 'a', 'i', 'l', 's']}
              idx={15}
            />
          </h1>
          <p>
            A recent graduate of the Northcoders developer bootcamp. Experience
            with MERN, HTML/CSS and Python.
          </p>
          <p>
            A recent graduate of the Northcoders developer bootcamp. Experience
            with MERN, HTML/CSS and Python. A recent graduate of the Northcoders
            developer bootcamp. Experience with MERN, HTML/CSS and Python.
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <img src={tsLogo} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face3">
              <img src={pythonLogo} color="#DD0031" className="python-logo" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGithub} color="black" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" active={true} />
    </>
  )
}

export default Details
