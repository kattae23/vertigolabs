import { NextRequest, NextResponse } from 'next/server'

export type AnalyticsArrType = {
  financedProjects: number,
  investmentRaised: number,
  returnedProjects: number,
  returnsAndDeliveries: number,
  averageProjectAmount: number;
  averageLtv: number;
  averageDurationExpectedProject: string;
  averageDurationEndOfProject: string;
}

const analyticsArr: AnalyticsArrType = {
  financedProjects: 61,
  investmentRaised: 19.9,
  returnedProjects: 15,
  returnsAndDeliveries: 6.3,
  averageProjectAmount: 327.623,
  averageLtv: 53.07,
  averageDurationExpectedProject: '14 meses',
  averageDurationEndOfProject: '8 meses'
}

export async function GET (request: NextRequest) {
  return NextResponse.json(analyticsArr)
}
