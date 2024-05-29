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


- host + 1 remote (+50k lines of code):
  - `npm run build`: 
```
✓ 36 modules transformed.
dist/index.html                   0.46 kB │ gzip:  0.30 kB
dist/assets/react-CHdo91hT.svg    4.13 kB │ gzip:  2.05 kB
dist/assets/index-DiwrgTda.css    1.39 kB │ gzip:  0.72 kB
dist/assets/index-BoJEW62K.js   506.02 kB │ gzip: 48.64 kB
✓ built in 908ms
```
  - `npm run dev`: 162ms