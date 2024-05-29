import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import {Fizzbuzz} from '../remote1/Index.tsx'
// import {fizzbuzz} from '../remote2/Index.tsx'

// const Fizzbuzz = lazy(() => import('../remote1/index.tsx'));
// const {fizzbuzz}= await import('../remote2/Index.tsx')

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Host application</h1>
      <div className="card">
      <Suspense fallback={<div>loading</div>}>
        <Fizzbuzz count={16} />
      </Suspense>
        <button onClick={async () => {
            // const {fizzbuzz}= await import('../remote2/Index.tsx')
            // const {fizzbuzz: fizzbuzz1}= await import('../remote1/Index.tsx')

            // await (await import('./firstLevel1.js')).default();

            setCount((count) => count + 1)
            // fizzbuzz(15)
            // fizzbuzz1(15)
          }}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
