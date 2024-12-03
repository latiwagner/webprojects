import data from '../data/users.json'
import type { DataListEnvelope } from './dataEnvelope.ts'

export function getAll(): DataListEnvelope<User> {
  return {
    isSuccess: true,
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

export function removeUser(user: User) {
  const index = getAll().data.findIndex((i) => i.id === user.id)
  if (index != -1) {
    getAll().data.splice(index, 1)
  }
}