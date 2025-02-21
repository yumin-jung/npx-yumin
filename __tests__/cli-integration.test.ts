import { system, filesystem } from 'gluegun'

const src = filesystem.path(__dirname, '..')

const cli = async (cmd) =>
  system.run('node ' + filesystem.path(src, 'bin', 'yumin') + ` ${cmd}`)

test('outputs version', async () => {
  const output = await cli('--version')
  expect(output).toContain('1.5.3')
})

test('outputs help', async () => {
  const output = await cli('--help')
  expect(output).toContain('1.5.3')
})

test('generates file', async () => {
  const output = await cli('generate foo')

  expect(output).toContain('Generated file at models/foo-model.ts')
  const foomodel = filesystem.read('models/foo-model.ts')

  expect(foomodel).toContain(`module.exports = {`)
  expect(foomodel).toContain(`name: 'foo'`)

  // cleanup artifact
  filesystem.remove('models')
})
