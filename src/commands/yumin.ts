import { GluegunCommand } from 'gluegun'

const command: GluegunCommand = {
  name: 'yumin',
  run: async (toolbox) => {
    const { print } = toolbox

    print.newline()
    print.newline()
    print.newline()

    print.info(`   Hello, I'm Yumin Jung`)

    print.newline()

    print.highlight(`   Software Engineer, Frontend`)

    print.newline()

    print.info(
      `   GitHub \u001b[0m\u001b[4m https://github.com/yumin-jung\u001b[0m`
    )
    print.info(`     Blog \u001b[0m\u001b[4m https://yumin.blog\u001b[0m`)

    print.newline()
    print.newline()
    print.newline()
  },
}

module.exports = command
