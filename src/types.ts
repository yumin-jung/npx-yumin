export interface Contribution {
  date: string
  count: number
  level: 0 | 1 | 2 | 3 | 4
}

export interface Response {
  total: {
    [year: number]: number
    [year: string]: number
  }
  contributions: Array<Contribution>
}

export interface NestedResponse {
  total: {
    [year: number]: number
    [year: string]: number
  }
  contributions: {
    [year: number]: {
      [month: number]: {
        [day: number]: Contribution
      }
    }
  }
}

export interface YearData {
  year: string
  contributions: string[]
}
