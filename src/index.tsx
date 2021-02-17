import * as React from 'react'
import styles from './styles.module.css'
import { Box } from '@material-ui/core'

interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return <Box className={styles.test}>Example Component: {text}</Box>
}
