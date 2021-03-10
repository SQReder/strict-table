import { ReactNode } from 'react'
import { AnyObject } from './helpers'

export interface BasicCellRendererProps<T> {
  value: T
}

export interface EnhancedCellRenderProps<
  Model extends AnyObject,
  Field extends keyof Model = keyof Model & string
> extends BasicCellRendererProps<Model[Field]> {
  rowIndex: number
  model: Model
  column: ColumnDef<Model, Field>
}

export type BasicCellRenderer<T> = (
  props: BasicCellRendererProps<T>
) => ReactNode

export type EnhancedCellRenderer<
  Model extends AnyObject,
  Field extends keyof Model = keyof Model & string
> = (props: EnhancedCellRenderProps<Model, Field>) => ReactNode

export type CellRenderer<
  Model extends AnyObject,
  Field extends keyof Model = keyof Model & string
> = BasicCellRenderer<Model[Field]> | EnhancedCellRenderer<Model, Field>

export interface ColumnDef<
  Model extends AnyObject,
  Field extends keyof Model = keyof Model & string
> {
  width?: number | string
  field: Field
  renderer?: CellRenderer<Model, Field>
}

type FilteredKeys<T, U> = {
  [P in keyof T]: T[P] extends U ? P : never
}[keyof T]

export type ExtractByFieldType<Model, FieldType> = {
  [K in FilteredKeys<Model, FieldType>]: Model[K]
}
