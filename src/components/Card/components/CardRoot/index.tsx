import React from 'react'

import styles from './styles.module.css'

interface CardRootProps {
  children: React.ReactNode
}

export const CardRoot: React.FC<CardRootProps> = ({ children }) => {
  return <div className={styles.cardRootContainer}>{children}</div>
}
