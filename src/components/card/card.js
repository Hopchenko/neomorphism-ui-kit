import React from 'react'

import styles from './card.module.scss'
import Avatar from '../avatar/avatar'

const Card = () => {
  const { container, name, position } = styles
  return (
    <div className={container}>
      <Avatar />
      <p className={name}>Oleksii Hopchenko</p>
      <p className={position}>Software Developer</p>
    </div>
  )
}

export default Card
