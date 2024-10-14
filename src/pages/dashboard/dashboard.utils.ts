import { useEffect, useState } from 'react'
import { getReport } from 'services'
import { ReportsPayloadResponse } from 'typings/services'
import { ServerResponse } from 'typings/utils'

const useGetReports = () => {
  const [reportsData, setReportsData] = useState<ReportsPayloadResponse>(null)
  const [hasError, setHasError] = useState<boolean>(false)

  useEffect(() => {
    async function init() {
      try {
        const { data } =
          await getReport<ServerResponse<ReportsPayloadResponse>>()
        setHasError(data.success)
        if (data.success) setReportsData(data.data)
      } catch (err) {
        setHasError(true)
      }
    }
    init()
  }, [])

  return {
    hasError,
    infected: reportsData?.survivors?.infected || 0,
    nonInfected: reportsData?.survivors?.nonInfected || 0,
  }
}

export { useGetReports }
