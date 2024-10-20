export interface DataEnvelope<T> {
  data: T
  error?: String
}

export interface DataListEnvelope<T> {
  data: T[]
  total: number
  error?: string
}
