import { AnalyticsArrType } from '@/types/api-types'

export async function fetchAnalytics () {
  const res = await fetch(`${process.env.API_URL}/api/analytics`, { cache: 'force-cache' })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json() as Promise<AnalyticsArrType>
}
