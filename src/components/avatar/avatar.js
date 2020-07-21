import React from 'react'
import styles from './avatar.module.scss'
import avatar from '../../images/avatar.png'

const Avatar = () => {
  const { container, image } = styles

  return (
    <div className={container}>
      <img className={image} src={avatar} alt="avatar" />
    </div>
  )
}

export default Avatar
