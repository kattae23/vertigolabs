import { AnalyticsArrType } from '@/types/api-types'
import fetch from 'node-fetch'

export async function fetchAnalytics () {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL!
    const res = await fetch(`${apiUrl}/analytics`)
    const data = await res.json()
    return data as Promise<AnalyticsArrType>
  } catch (error) {
    console.log(error)
    throw new Error('error fetching data.')
  }
}
