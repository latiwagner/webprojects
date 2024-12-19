import type { DataEnvelope, DataListEnvelope } from './dataEnvelope'
import { api } from './myFetch'

export async function getAll() {
  return api<DataListEnvelope<User>>('users')
}

export async function search(query: string) {
  return api<DataListEnvelope<User>>(`users/search?q=${query}`)
}

export async function getById(id: number) {
  return api<DataEnvelope<User>>(`users/${id}`)
}
export function create(user: User) {
  return api<DataEnvelope<User>>('users', user)
}
export function update(user: User) {
  return api<DataEnvelope<User>>(`users/${user.id}`, user, 'PATCH')
}
export function remove(id: number) {
  return api<DataEnvelope<User>>(`users/${id}`, undefined, 'DELETE')
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

// export function removeUser(user: User) {
//   const index = getAll().data.findIndex((i) => i.id === user.id)
//   if (index != -1) {
//     getAll().data.splice(index, 1)
//   }
// }