import Activity from '@/pages/Activity.vue'
import data from '../data/activities.json'
import type { DataListEnvelope } from './dataEnvelope.ts'

export function getAll(): DataListEnvelope<Activity> {
  return {
    data: data.items,
    total: data.total
  }
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

  export function removeActivity(activity: Activity) {
    const index = getAll().data.findIndex((i) => i.id === activity.id)
    if (index != -1) {
      getAll().data.splice(index, 1)
    }
  }