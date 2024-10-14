interface ReportsSurvivor {
  all: number
  infected: number
  nonInfected: number
}

export interface ReportsPayloadResponse {
  survivors: ReportsSurvivor
  items: { [key: string]: number }
}
