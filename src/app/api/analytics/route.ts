import { promises as fs } from 'fs'
import { NextRequest, NextResponse } from 'next/server'
import path from 'path'

export async function GET (request: NextRequest) {
  const jsonDirectory = path.join(process.cwd(), 'src/app/api/analytics')

  const analyticsArr = await fs.readFile(jsonDirectory + '/analytics-arr.json', 'utf8')

  if (!analyticsArr) {
    return new NextResponse('Internal Error, Talk with an administrator', { status: 500 })
  }

  return new NextResponse(analyticsArr, { status: 200 })
}
