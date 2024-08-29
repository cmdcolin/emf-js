import { test, expect } from 'vitest'
import { parse } from '../src'
import * as fs from 'fs'

test('emd', async () => {
  const ret = fs.readFileSync('test/data/TF105041.aln.emf', 'utf8')
  const res = parse(ret)
  expect(res).toMatchSnapshot()
})
