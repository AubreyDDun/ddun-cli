import path from 'path'
import test from 'ava'
import sao from 'sao'

const generator = path.join(__dirname, '..')

const getPkgFields = (pkg) => {
  pkg = JSON.parse(pkg)
  return pkg
}

test('defaults', async t => {
  const stream = await sao.mock({
    generator,
  })

  const pkg = await stream.readFile('package.json')
  t.snapshot(stream.fileList, 'Generated files')
  t.snapshot(getPkgFields(pkg), 'package.json')
})
