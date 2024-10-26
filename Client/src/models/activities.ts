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