import React, { Fragment } from 'react'
import { StoryModel } from '../types/helpers'
import { BasicCellRenderer, EnhancedCellRenderer } from '../types/model'

export const PercentCellRenderer: BasicCellRenderer<number> = ({ value }) => (
  <Fragment>{value}%</Fragment>
)

export const CoolCellRenderer: EnhancedCellRenderer<StoryModel, 'value'> = ({
  rowIndex,
  value,
  column: { field },
}) => (
  <Fragment>
    <div>Index: {rowIndex}</div>
    <div>Field: {field}</div>
    <div>Value: {value}</div>
  </Fragment>
)
