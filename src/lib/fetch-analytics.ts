import { AnalyticsArrType } from '@/types/api-types'

export async function fetchAnalytics () {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL!
    console.log('apiUrl', apiUrl)
    const res = await fetch(`${apiUrl}/analytics`, {
      next: {
        revalidate: 3600
      }
    })
    console.log('res', res)
    const data = await res.json()
    return data as Promise<AnalyticsArrType>
  } catch (error) {
    console.log(error)
    throw new Error('error fetching data.')
  }
}
