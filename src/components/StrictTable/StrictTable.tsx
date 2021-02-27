import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core'
import React, { ReactElement } from 'react'
import { AnyObject } from '../../types/helpers'
import { ColumnDef, EnhancedCellRenderProps } from '../../types/model'
import { DefaultCellRenderer } from '../cellRenderers'

export interface StrictTableProps<Model extends AnyObject> {
  columns: readonly ColumnDef<Model>[]
  rows: readonly Model[]
}

export function StrictTable<Model extends AnyObject>({
  columns,
  rows,
}: StrictTableProps<Model>): ReactElement {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((c) => (
              <TableCell>{c.field}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow>
              {columns.map((column, rowIndex) => {
                const renderer = column.renderer ?? DefaultCellRenderer
                const value = row[column.field]
                const newVar: EnhancedCellRenderProps<AnyObject> = {
                  value,
                  rowIndex,
                  column,
                  model: row,
                }
                return (
                  <TableCell width={column.width}>{renderer(newVar)}</TableCell>
                )
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
