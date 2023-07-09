import React from 'react'

import styles from './styles.module.css'

interface CardBrandProps {
  children: React.ReactNode
}

export const CardBrand: React.FC<CardBrandProps> = ({ children }) => {
  return <div className={styles.cardBrandContainer}>{children}</div>
}
