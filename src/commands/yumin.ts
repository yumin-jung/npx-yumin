import { GluegunCommand } from 'gluegun'

const command: GluegunCommand = {
  name: 'yumin',
  run: async (toolbox) => {
    const { print } = toolbox

    print.newline()
    print.newline()
    print.newline()

    print.info(`   Hello, I'm \u001b[30m\u001b[100m Yumin Jung \u001b[0m ☁️`)

    print.newline()

    print.highlight(`   Software Engineer`)

    print.newline()

    print.info(
      `   \u001b[47m\u001b[30m   GitHub \u001b[0m\u001b[4m https://github.com/yumin-jung\u001b[0m`
    )
    print.info(
      `   \u001b[47m\u001b[30m     Blog \u001b[0m\u001b[4m https://yumin.blog\u001b[0m`
    )
    print.info(
      `   \u001b[47m\u001b[30m LinkedIn \u001b[0m\u001b[4m https://www.linkedin.com/in/alex-yumin-jung/\u001b[0m`
    )

    print.newline()

    print.info(`   ✨ No Silver Bullet ✨`)

    print.newline()
    print.newline()
    print.newline()
  },
}

module.exports = command
