import { api } from '@/lib/axios'

export interface getDailyRevenueInPeriodQuery {
  from?: Date
  to?: Date
}

export type getDailyRevenueInPeriodResponse = {
  data: string
  receipt: number
}[]

export async function getDailyRevenueInPeriod({
  from,
  to,
}: getDailyRevenueInPeriodQuery) {
  const response = await api.get<getDailyRevenueInPeriodResponse>(
    '/metrics/daily-receipt-in-period',
    {
      params: {
        from,
        to,
      },
    },
  )

  return response.data
}
