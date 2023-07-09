import React from 'react'

import styles from './styles.module.css'

interface CardDescriptionProps {
  children: React.ReactNode
}

export const CardDescription: React.FC<CardDescriptionProps> = ({
  children,
}) => {
  return <p className={styles.cardDescriptionContainer}>{children}</p>
}
