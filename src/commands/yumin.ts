import { GluegunCommand } from 'gluegun'

const command: GluegunCommand = {
  name: 'yumin',
  run: async (toolbox) => {
    const { print } = toolbox

    print.newline()
    print.newline()
    print.newline()

    print.info(`   Hello, I'm \u001b[44m Yumin Jung \u001b[0m ☁️`)

    print.newline()

    print.highlight(`   UX Engineer \u001b[37mand \u001B[32mRunner`)

    print.newline()

    print.info(
      `   \u001b[47m\u001b[30m  GitHub \u001b[0m\u001b[4m https://github.com/yumin-jung\u001b[0m`
    )
    print.info(
      `   \u001b[47m\u001b[30m    Blog \u001b[0m\u001b[4m https://yumin.blog\u001b[0m`
    )
    print.info(
      `   \u001b[47m\u001b[30m  Strava \u001b[0m\u001b[4m https://www.strava.com/athletes/yumin-jung\u001b[0m`
    )

    print.newline()

    print.info(`   Good Luck 🍀`)

    print.newline()
    print.newline()
    print.newline()
  },
}

module.exports = command
