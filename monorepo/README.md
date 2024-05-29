# monorepo

Example of monorepo configuration, for performance reasons vs federated-frontend.

## Considerations

- load-time performance: chunk sizing can be kept in check leveraging [Rect.lazy](https://react.dev/reference/react/lazy) and [dynamic imports](https://mariusschulz.com/blog/dynamic-import-expressions-in-typescript).
  ```
  // from
  import {Fizzbuzz, fizzbuzz} from '../remote1/Index.tsx'
  
  // to
  const Fizzbuzz = lazy(() => import('../remote1/index.tsx'));
  const { fizzbuzz }= await import('../remote1/Index.tsx')
  ```
- controlled dependency graph: https://github.com/smikula/good-fences 

## Performance measurement

**Apple M1 Pro / 16GB RAM**
**Node 20.11**

- baseline (only host): 
  - `npm run build`: 2.22s user 0.21s system 158% cpu 1.536 total
```
✓ 34 modules transformed.
dist/index.html                   0.46 kB │ gzip:  0.30 kB
dist/assets/react-CHdo91hT.svg    4.13 kB │ gzip:  2.05 kB
dist/assets/index-DiwrgTda.css    1.39 kB │ gzip:  0.72 kB
dist/assets/index-BhLPtGA-.js   143.36 kB │ gzip: 46.10 kB
✓ built in 370ms
```
  - `npm run dev`: 155ms


- host + 50 remote (50x +50k lines of code):
  - `npm run build`: 80.82s user 22.28s system 141% cpu 1:12.91 total
```
✓ 86 modules transformed.
dist/index.html                   0.46 kB │ gzip:  0.30 kB
dist/assets/react-CHdo91hT.svg    4.13 kB │ gzip:  2.05 kB
dist/assets/index-DiwrgTda.css    1.39 kB │ gzip:  0.72 kB
dist/assets/index-BCpb9irZ.js     0.09 kB │ gzip:  0.10 kB
dist/assets/index-CGyzFyfF.js   155.04 kB │ gzip: 48.59 kB
dist/assets/Index-btI_kFcp.js   362.62 kB │ gzip:  1.73 kB
dist/assets/Index-BQD5AD26.js   362.62 kB │ gzip:  1.73 kB
dist/assets/Index-WLX91IJc.js   362.62 kB │ gzip:  1.73 kB
dist/assets/Index-CHqXh800.js   362.62 kB │ gzip:  1.73 kB
dist/assets/Index-C5hWGd4P.js   362.62 kB │ gzip:  1.73 kB
dist/assets/Index-B5WQn89M.js   362.62 kB │ gzip:  1.73 kB
dist/assets/Index-BFAWLNU1.js   362.62 kB │ gzip:  1.73 kB
dist/assets/Index-B44sDq5w.js   362.62 kB │ gzip:  1.73 kB
dist/assets/Index-BivKbHFX.js   362.62 kB │ gzip:  1.73 kB
dist/assets/Index-DL5FSSFr.js   362.62 kB │ gzip:  1.73 kB
dist/assets/Index-CcsPZDUz.js   362.62 kB │ gzip:  1.73 kB
dist/assets/Index-D1RWdwg1.js   362.62 kB │ gzip:  1.73 kB
dist/assets/Index-CXrsLKu7.js   362.62 kB │ gzip:  1.73 kB
dist/assets/Index-BtiUB0re.js   362.62 kB │ gzip:  1.73 kB
dist/assets/Index-Bb7P0zv0.js   362.62 kB │ gzip:  1.73 kB
dist/assets/Index-BSbDPFB7.js   362.62 kB │ gzip:  1.73 kB
dist/assets/Index-6UaJFwUW.js   362.62 kB │ gzip:  1.73 kB
dist/assets/Index-Cxk_eJEa.js   362.62 kB │ gzip:  1.73 kB
dist/assets/Index-BxalyWw7.js   362.62 kB │ gzip:  1.73 kB
dist/assets/Index-BTtA1mdT.js   362.62 kB │ gzip:  1.73 kB
dist/assets/Index-CZm9o_Bt.js   362.62 kB │ gzip:  1.73 kB
dist/assets/Index-e6SjxpRW.js   362.62 kB │ gzip:  1.73 kB
dist/assets/Index-BZnlsBi1.js   362.62 kB │ gzip:  1.73 kB
dist/assets/Index-ByL7gG71.js   362.62 kB │ gzip:  1.73 kB
dist/assets/Index-DK3iUhf8.js   362.62 kB │ gzip:  1.73 kB
dist/assets/Index-BrOkC9VX.js   362.62 kB │ gzip:  1.73 kB
dist/assets/Index-C5svss2v.js   362.62 kB │ gzip:  1.73 kB
dist/assets/Index-Zc_ARbP2.js   362.62 kB │ gzip:  1.73 kB
dist/assets/Index-DW3z9pKz.js   362.62 kB │ gzip:  1.73 kB
dist/assets/Index-BhNFqj1R.js   362.62 kB │ gzip:  1.73 kB
dist/assets/Index-DqyErMpv.js   362.62 kB │ gzip:  1.73 kB
dist/assets/Index-D_R9tr5U.js   362.62 kB │ gzip:  1.73 kB
dist/assets/Index-DZmcRpEA.js   362.62 kB │ gzip:  1.73 kB
dist/assets/Index-CWdtQPhJ.js   362.62 kB │ gzip:  1.73 kB
dist/assets/Index-BwGUrlXu.js   362.62 kB │ gzip:  1.73 kB
dist/assets/Index-lS0MZ8rw.js   362.62 kB │ gzip:  1.73 kB
dist/assets/Index-BeIIYiP8.js   362.62 kB │ gzip:  1.73 kB
dist/assets/Index-D1Phfffw.js   362.62 kB │ gzip:  1.73 kB
dist/assets/Index-O6ozdOdZ.js   362.62 kB │ gzip:  1.73 kB
dist/assets/Index-Dw0uWvjE.js   362.62 kB │ gzip:  1.73 kB
dist/assets/Index-Cxm90PFQ.js   362.62 kB │ gzip:  1.73 kB
dist/assets/Index-BR5JE2km.js   362.62 kB │ gzip:  1.73 kB
dist/assets/Index-Bgcmi3WM.js   362.62 kB │ gzip:  1.73 kB
dist/assets/Index-CZ8yoCqt.js   362.62 kB │ gzip:  1.73 kB
dist/assets/Index-DTYaBk_8.js   362.62 kB │ gzip:  1.73 kB
dist/assets/Index-CS_dDaSC.js   362.62 kB │ gzip:  1.73 kB
dist/assets/Index-BIduKEjf.js   362.62 kB │ gzip:  1.73 kB
dist/assets/Index-pCIdLbP3.js   362.62 kB │ gzip:  1.73 kB
dist/assets/Index-DB1BYseC.js   362.62 kB │ gzip:  1.73 kB
dist/assets/Index-CRw2IO48.js   362.62 kB │ gzip:  1.73 kB
✓ built in 44.66s
```
  - `npm run dev`: 162ms