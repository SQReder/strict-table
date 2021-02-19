import { ReactNode } from 'react'
import { AnyObject } from './helpers'

export type CellRenderer<T> = (value: T) => ReactNode

export interface ColumnDef<
  Model extends AnyObject,
  Field extends keyof Model = keyof Model & string
> {
  width?: number | string
  field: Field
  renderer?: CellRenderer<Model[Field]>
}
