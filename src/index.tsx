import { Box } from '@material-ui/core'
import * as React from 'react'
import { FC } from 'react'
import styles from './styles.module.css'

interface Props {
  text: string
}

export const ExampleComponent: FC<Props> = ({ text }) => {
  return <Box className={styles.test}>Example Component: {text}</Box>
}
