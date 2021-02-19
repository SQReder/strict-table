import { ColumnDef } from '../types/model'
import { buildColumns } from './helpers'

type StoryModel = {
  id: string
  value: number
}

describe('Column Buidler', () => {
  it('should build column with no extra configuration', () => {
    const actual = buildColumns<StoryModel>((b) => [b('id'), b('value')])

    const expected: readonly ColumnDef<StoryModel>[] = [
      { field: 'id' },
      { field: 'value' },
    ]
    expect(actual).toStrictEqual(expected)
  })
})
