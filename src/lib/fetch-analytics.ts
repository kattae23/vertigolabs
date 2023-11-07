import { AnalyticsArrType } from '@/types/api-types'

export async function fetchAnalytics () {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL!
  const res = await fetch(`${apiUrl}/analytics`, {
    cache: 'force-cache',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  })
  const data: Promise<AnalyticsArrType> = await res.json()
  return data
}
