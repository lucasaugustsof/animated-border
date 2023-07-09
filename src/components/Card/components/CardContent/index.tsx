import React from 'react'

import styles from './styles.module.css'

interface CardContentProps {
  children: React.ReactNode
}

export const CardContent: React.FC<CardContentProps> = ({ children }) => {
  return <a className={styles.cardContentContainer}>{children}</a>
}
