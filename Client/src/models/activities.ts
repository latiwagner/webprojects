import type { DataEnvelope, DataListEnvelope } from './dataEnvelope'
import { api } from './myFetch'

export async function getAll() {
  return api<DataListEnvelope<Activity>>('activities')
}
export async function getById(id: number) {
  return api<DataEnvelope<Activity>>(`activities/${id}`)
}
export function create(activity: Activity) {
  return api<DataEnvelope<Activity>>('activities', activity)
}
export function update(activity: Activity) {
  return api<DataEnvelope<Activity>>(`activities/${activity.id}`, activity, 'PATCH')
}
export function remove(id: number) {
  return api<DataEnvelope<Activity>>(`activities/${id}`, undefined, 'DELETE')
}

export interface Activity {
    id: number
    posterName: string
    posterIcon: string
    title: string
    date: string
    distance: number
    duration: number
  }

//NOTE TO LOOK AT THIS LATER

  // export async function removeActivity(activity: Activity) {
  //   const index = (await getAll()).data.findIndex((i) => i.id === activity.id)
  //   if (index != -1) {
  //     (await getAll()).data.splice(index, 1)
  //   }
  // }
  