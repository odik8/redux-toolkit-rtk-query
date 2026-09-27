// Ответ json-server v1 на запрос с _page/_per_page
export interface IPage<T> {
  first: number
  prev: number | null
  next: number | null
  last: number
  pages: number
  items: number
  data: T[]
}
