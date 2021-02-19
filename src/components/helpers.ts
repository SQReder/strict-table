import { AnyObject } from '../types/helpers'
import { ColumnDef } from '../types/model'

type ColumnBuilder<Model extends AnyObject> = <Field extends keyof Model>(
  field: Field,
  config?: Omit<ColumnDef<Model, Field>, 'field'>
) => ColumnDef<Model, Field>

export function buildColumns<Model extends AnyObject>(
  cb: (builder: ColumnBuilder<Model>) => ColumnDef<Model>[]
) {
  function builder<Field extends keyof Model>(
    field: Field,
    config: Omit<ColumnDef<Model, Field>, Field>
  ): ColumnDef<Model, Field> {
    return {
      field,
      ...(config ?? {}),
    }
  }

  return cb(builder)
}
