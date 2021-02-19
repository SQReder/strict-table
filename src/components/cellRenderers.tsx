import React from 'react'
import { CellRenderer } from '../types/model'

export const DefaultCellRenderer: CellRenderer<unknown> = (value) => (
  <>{value}</>
)

export const PercentCellRenderer: CellRenderer<number> = (value) => (
  <>{value}%</>
)
