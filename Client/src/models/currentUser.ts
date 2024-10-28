import { computed, ref } from 'vue'
import type { User } from './users'

export interface CurrentUser {
  user: User
}

const currentUser = ref<CurrentUser[]>([])

export const refUser = () => currentUser

export function logInAs(user: User) {
  //const login = currentUser.value.find((i) => i.user.id == user.id)
  currentUser.value.pop()
  currentUser.value.push({ user })
}

export function logOut() {
  currentUser.value.pop()
}