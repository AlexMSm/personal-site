import React, { useEffect, useState } from 'react'
import ALogo from '../../assets/images/A-logo-white.png'
import { Link } from 'react-router-dom'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState<string>('text-animate')
  const nameArray: string[] = 'lex Smith'.split('')
  const roleArray: string[] = 'Junior Developer'.split('')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={`${letterClass} _12`}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={ALogo} alt="developer-logo" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={roleArray}
              idx={20}
            />
          </h1>
          <h2>Javascript | React | SQL | Python</h2>

          <Link to="/contact" className="flat-button">
            Contact Me
          </Link>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" active={true} />
    </>
  )
}

export default Home
