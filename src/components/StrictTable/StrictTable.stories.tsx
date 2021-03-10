import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'
import { StoryModel } from '../../types/helpers'
import { DefaultCellRenderer } from '../CellComponents'
import { CoolCellRenderer, PercentCellRenderer } from '../cellRenderers'
import { buildColumns } from '../helpers'
import { StrictTable, StrictTableProps } from './StrictTable'

// noinspection JSUnusedGlobalSymbols
export default {
  title: 'Strict Table',
  component: StrictTable,
} as Meta

export const Empty: Story<StrictTableProps<StoryModel>> = (args) => (
  <StrictTable {...args} />
)

const columns = buildColumns<StoryModel>((builder) => [
  builder('id', { renderer: DefaultCellRenderer, width: 20 }),
  builder('value', { width: 30 }),
  builder('percentage', { renderer: PercentCellRenderer, width: 30 }),
  builder('id', { renderer: CoolCellRenderer }),
])

Empty.args = {
  columns,
  rows: [{ id: '0', value: 'zero', percentage: 12 }],
}
