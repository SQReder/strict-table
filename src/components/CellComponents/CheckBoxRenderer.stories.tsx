import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'
import { buildColumns } from '../helpers'
import { StrictTable } from '../StrictTable/StrictTable'
import { CheckBoxRenderer } from './CheckBoxRenderer'

export default {
  title: 'Strict Table/Cell components',
  component: CheckBoxRenderer,
} as Meta

type StoryModel = {
  name: string
  value?: boolean
}

export const Mya: Story = () => (
  <StrictTable
    columns={buildColumns<StoryModel>((builder) => [
      builder('name', {}),
      builder('value', { renderer: CheckBoxRenderer }),
    ])}
    rows={[
      { name: 'unchecked', value: false },
      { name: 'checked', value: true },
    ]}
  />
)

Mya.args = {}
