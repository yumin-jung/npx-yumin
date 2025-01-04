import { GluegunCommand } from 'gluegun'
import { Contribution, YearData } from '../types'

const command: GluegunCommand = {
  name: 'yumin',
  run: async (toolbox) => {
    const { print } = toolbox

    // Loading animation setup
    let loadingInterval: NodeJS.Timer | null = null
    const loadingFrames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏']
    let frameIndex = 0

    const startLoading = () => {
      loadingInterval = setInterval(() => {
        process.stdout.write(
          `\r   Fetching GitHub Contributions... ${loadingFrames[frameIndex]}`
        )
        frameIndex = (frameIndex + 1) % loadingFrames.length
      }, 80)
    }

    const stopLoading = () => {
      if (loadingInterval) {
        clearInterval(loadingInterval)
        loadingInterval = null
      }
      process.stdout.write('\r                                  \r')
      process.stdout.write(
        '\r   My GitHub Contributions for 3 Years:             \n\n\n'
      )
    }

    const fetchContributions = async (username: string) => {
      try {
        const url = `https://github-contributions-api.jogruber.de/v4/${username}`
        const currentYear = new Date().getFullYear()
        const response = await fetch(
          `${url}?y=${currentYear - 2}&y=${currentYear - 1}&y=${currentYear}`
        )
        const data = await response.json()
        return data
      } catch (error) {
        console.error('Error fetching contribution data:', error)
      }
    }

    const convertToLegend = (count: number) => {
      if (count === 0) return ' ' // Empty
      if (count <= 3) return '░' // Low level
      if (count <= 6) return '▒' // Medium level
      return '▓' // High level
    }

    const generateContributionGrid = (contributions: Contribution[]) => {
      const grid = []
      const contributionsByYear = {}

      contributions.forEach((contribution) => {
        const date = new Date(contribution.date)
        const year = date.getFullYear().toString()
        if (!contributionsByYear[year]) {
          contributionsByYear[year] = []
        }
        contributionsByYear[year].push(contribution)
      })

      Object.keys(contributionsByYear).forEach((year) => {
        const dailyContributions = []
        let currentMonth = []
        let lastDate = -1

        contributionsByYear[year].forEach((contribution) => {
          const date = new Date(contribution.date)
          const day = date.getDate()

          if (day !== lastDate) {
            if (currentMonth.length) {
              dailyContributions.push(currentMonth)
            }
            currentMonth = []
          }

          currentMonth.push(convertToLegend(contribution.count))
          lastDate = day
        })

        if (currentMonth.length) {
          dailyContributions.push(currentMonth)
        }

        grid.push({ year, contributions: dailyContributions })
      })

      return grid
    }

    const printFormattedGrid = (grid: YearData[]) => {
      let output = ''

      grid.forEach((yearData) => {
        const startDay = new Date(`${yearData.year}-01-01`).getDay()

        const groupedByModulo = [[], [], [], [], [], [], []]

        for (let i = 0; i < startDay; i++) {
          yearData.contributions.unshift(' ')
        }

        // Group contributions by index % 7
        yearData.contributions.forEach((contribution, index) => {
          const groupIndex = index % 7
          groupedByModulo[groupIndex].push(contribution)
        })

        for (let i = 0; i < 7; i++) {
          const row = groupedByModulo[i]
          if (row.length > 0) {
            output += `   \x1b[32m${row.join('')}\x1b[0m\n`
          }
        }

        output += '\n'
        output += `                           ${yearData.year}\n`
        output += '\n'
      })

      print.info(output)
    }

    print.newline()
    print.newline()
    print.newline()

    print.info(`   Hello, I'm Yumin Jung`)
    print.newline()
    print.info(`   \x1b[32mSoftware Engineer, Frontend\x1b[0m`)
    print.newline()
    print.info(
      `   [\u001b]8;;https://github.com/yumin-jung\u001b\\GitHub\u001b]8;;\u001b\\][\u001b]8;;https://yumin.me\u001b\\Blog\u001b]8;;\u001b\\]`
    )

    print.newline()

    startLoading()

    const username = 'yumin-jung'
    const contributionsData = await fetchContributions(username)

    stopLoading()

    const grid = generateContributionGrid(contributionsData.contributions)

    printFormattedGrid(grid)
  },
}

module.exports = command
