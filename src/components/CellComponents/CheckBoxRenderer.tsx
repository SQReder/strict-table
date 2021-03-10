import React, { Fragment } from 'react'
import { BasicCellRenderer } from '../../types/model'

export const CheckBoxRenderer: BasicCellRenderer<boolean> = ({ value }) => (
  <Fragment>{value ? '✅' : '❌'}</Fragment>
)
