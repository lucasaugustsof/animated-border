import React from 'react'

import styles from './styles.module.css'

interface CardIntroductionProps {
  children: React.ReactNode
}

export const CardIntroduction: React.FC<CardIntroductionProps> = ({
  children,
}) => {
  return <div className={styles.cardIntroductionContainer}>{children}</div>
}
