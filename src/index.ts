export interface Row {
  id: string
  seq: string
}

export function parseEmfAln(contents: string) {
  const lines = contents
    .split('\n')
    .map(f => f.trim())
    .filter(f => !!f)
  const seqs = []
  const alns = []
  for (const line of lines) {
    if (line.startsWith('SEQ')) {
      seqs.push(line)
    } else if (line.startsWith('DATA')) {
      continue
    } else if (line.startsWith('//')) {
      break
    } else {
      alns.push(line)
    }
  }
  const arr = seqs.map(s => {
    const [, species, protein, chr, start, end, strand, geneId, unknown] =
      s.split(' ')
    return {
      species,
      protein,
      chr,
      start: +start,
      end: +end,
      strand: +strand,
      geneId,
      unknown,
      seq: '',
    }
  })
  for (const aln of alns) {
    for (let j = 0; j < seqs.length; j++) {
      arr[j].seq += aln[j]
    }
  }
  return arr
}

export function parseEmfTree(contents: string) {
  const lines = contents
    .split('\n')
    .map(f => f.trim())
    .filter(f => !!f)
  const seqs = []
  let tree = ''
  for (const line of lines) {
    if (line.startsWith('SEQ')) {
      seqs.push(line)
    } else if (line.startsWith('DATA')) {
      continue
    } else if (line.startsWith('//')) {
      break
    } else {
      tree = line
    }
  }

  return { tree, seqs }
}
