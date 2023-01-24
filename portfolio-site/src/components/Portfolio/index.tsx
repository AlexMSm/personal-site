import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import '../Layout/index.scss'
import './index.scss'
import portfolioData from '../../data/portfolio.json'
import ProjectCard from './ProjectCard'

console.log(portfolioData)

interface Project {
  cover: string
  hover: string
  title: string
  description: string
  stack: string[]
  url: string
}

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState<string>('text-animate')

  console.log(typeof portfolioData, typeof portfolioData.portfolio)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <div>
      <div className="container portfolio-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Portfolio'.split('')}
              idx={15}
            />
          </h1>
        </div>
        <div className="projects-container">
          {portfolioData.portfolio.map((project, idx) => {
            return (
              <ProjectCard
                title={project.title}
                description={project.description}
                cover={project.cover}
                hover={project.hover}
                stack={project.stack}
                url={project.url}
              />
            )
          })}
        </div>
      </div>
      <Loader type="pacman" active={true} />
    </div>
  )
}

export default Portfolio
