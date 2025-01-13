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
    print.info(`   \x1b[32mSoftware Engineer, Frontend\x1b[0m`)
    print.newline()
    print.info(`   Blog      \u001b[0m\u001b[4m https://yumin.me\u001b[0m`)
    print.info(
      `   LinkedIn  \u001b[0m\u001b[4m https://www.linkedin.com/in/alex-yumin-jung/\u001b[0m`
    )
    print.info(
      `   Baekjoon  \u001b[0m\u001b[4m https://solved.ac/profile/self_overcoming\u001b[0m`
    )

    print.newline()
    print.newline()
    print.newline()
  },
}

module.exports = command
