import React, { Fragment } from 'react'
import { BasicCellRenderer } from '../../types/model'

// Any type is necessary here for types consistency and correct fallback to default renderer
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const DefaultCellRenderer: BasicCellRenderer<any> = ({ value }) => (
  <Fragment>{String(value)}</Fragment>
)
