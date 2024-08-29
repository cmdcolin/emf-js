import { test, expect } from 'vitest'
import { parseEmfAln, parseEmfTree } from '../src'
import fs from 'fs'

test('emf aln', async () => {
  const ret = fs.readFileSync('test/data/TF105041.aln.emf', 'utf8')
  const res = parseEmfAln(ret)
  expect(res).toMatchSnapshot()
})

test('emf tree', async () => {
  const ret = fs.readFileSync('test/data/TF101063.nh.emf', 'utf8')
  const res = parseEmfTree(ret)
  expect(res).toMatchSnapshot()
})
