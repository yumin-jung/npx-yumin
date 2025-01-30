import { GluegunCommand } from 'gluegun'

const command: GluegunCommand = {
  name: 'yumin',
  run: async (toolbox) => {
    const { print } = toolbox

    print.newline()
    print.newline()

    print.info(`Hello, my name is Yumin Jung.`)
    print.newline()

    print.info('----')
    print.info(
      `I am a \x1b[32msoftware engineer\x1b[0m with a strong focus on frontend development, specializing in web, extended reality (XR), and iOS applications. With a background in UX/UI design, I strive to create seamless, intuitive, and user-centric digital experiences.`
    )
    print.newline()

    print.info(
      `I am driven by a passion for solving meaningful challenges, particularly in \x1b[32mdigital healthcare\x1b[0m and \x1b[32mmental well-being\x1b[0m. My goal is to develop technology that not only performs efficiently but also makes a tangible impact on people’s lives.`
    )
    print.newline()

    print.info('----')
    print.info(`These are some of my recent projects.`)
    print.newline()

    print.info(`- AutoPalp: AR-Powered Palpation Assistance`)
    print.newline()

    print.info(
      `AutoPalp is an augmented reality (AR) software designed to empower individuals to perform palpation examinations with the accuracy of a trained physician. This project provided hands-on experience in integrating software solutions with medical applications, deepening my understanding of AR-based diagnostic tools. Additionally, I developed my expertise in Unity, focusing on its application in real-time spatial computing and user interaction.`
    )
    print.newline()

    print.info(`- Depression Symptom Analysis & Data Collection App`)
    print.newline()

    print.info(
      `I developed a research-driven iOS application for depression symptom analysis and data collection, with ResearchKit and CareKit to facilitate structured data gathering for clinical studies. This project allowed me to gain practical experience in iOS development for digital health research, focusing on patient-centric UX, secure data management, and real-world clinical integration.`
    )
    print.newline()

    print.info('----')
    print.info(
      `Beyond software engineering, I am a dedicated marathoner who thrives on endurance, discipline, and continuous improvement—principles that also shape my approach to engineering. I am also an persevering reader, constantly seeking new knowledge and perspectives to expand my thinking. Additionally, I have a deep appreciation for coffee, which fuels my creativity and focus throughout the day.`
    )
    print.newline()
    print.newline()
  },
}

module.exports = command
