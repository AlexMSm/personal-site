import React from 'react'
import './index.scss'

interface Props {
  letterClass: string
  strArray: string[]
  idx: number
}

const AnimatedLetters: React.FC<Props> = ({ letterClass, strArray, idx }) => {
  return (
    <span>
      {strArray.map((char: string, i: number) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  )
}

export default AnimatedLetters
