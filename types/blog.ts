export type BlogPost = {
  _path: string
  title: string
  description: string
  date: string | Date
  tags?: string[]
  cover?: boolean
}
