import data from '../data/users.json'
import type { DataListEnvelope } from './dataEnvelope.ts'

export function getAll(): DataListEnvelope<User> {
  return {
    data: data.items,
    total: data.total
  }
}

export interface User {
  id: number
  email: string
  username: string
  password: string
  image: string
  totalDistance: number
  totalDuration: number
  admin: boolean
}