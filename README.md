[![NPM version](https://img.shields.io/npm/v/emf-js.svg?style=flat-square)](https://npmjs.org/package/emf-js)
[![Build Status](https://img.shields.io/github/actions/workflow/status/cmdcolin/emf-js/push.yml?branch=master)](https://github.com/cmdcolin/emf-js/actions?query=branch%3Amaster+workflow%3APush+)

# emf-js

This parses emf format from Ensembl alignments

## Usage

```typescript
import { parse } from 'emf-js'
const file = fs.readFileSync('test.emf', 'utf8')
const ret = parse(file)
```

### Notes

See tests for example files
