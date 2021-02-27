export type AnyObject = Record<string, unknown>
export type EmptyObject = Record<string, never>

export type AssertEqual<A, B> = A extends B
  ? B extends A
    ? true
    : never
  : never

export type StoryModel = {
  id: string
  value: string
  percentage: number
}
