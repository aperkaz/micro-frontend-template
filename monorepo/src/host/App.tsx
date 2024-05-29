import { Suspense, lazy, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
const Fizzbuzz1 = lazy(() => import('../remote1/Index.tsx'));
const Fizzbuzz2 = lazy(() => import('../remote2/Index.tsx'));
const Fizzbuzz3 = lazy(() => import('../remote3/Index.tsx'));
const Fizzbuzz4 = lazy(() => import('../remote4/Index.tsx'));
const Fizzbuzz5 = lazy(() => import('../remote5/Index.tsx'));
const Fizzbuzz6 = lazy(() => import('../remote6/Index.tsx'));
const Fizzbuzz7 = lazy(() => import('../remote7/Index.tsx'));
const Fizzbuzz8 = lazy(() => import('../remote8/Index.tsx'));
const Fizzbuzz9 = lazy(() => import('../remote9/Index.tsx'));
const Fizzbuzz10 = lazy(() => import('../remote10/Index.tsx'));
const Fizzbuzz11 = lazy(() => import('../remote11/Index.tsx'));
const Fizzbuzz12 = lazy(() => import('../remote12/Index.tsx'));
const Fizzbuzz13 = lazy(() => import('../remote13/Index.tsx'));
const Fizzbuzz14 = lazy(() => import('../remote14/Index.tsx'));
const Fizzbuzz15 = lazy(() => import('../remote15/Index.tsx'));
const Fizzbuzz16 = lazy(() => import('../remote16/Index.tsx'));
const Fizzbuzz17 = lazy(() => import('../remote17/Index.tsx'));
const Fizzbuzz18 = lazy(() => import('../remote18/Index.tsx'));
const Fizzbuzz19 = lazy(() => import('../remote19/Index.tsx'));
const Fizzbuzz20 = lazy(() => import('../remote20/Index.tsx'));
const Fizzbuzz21 = lazy(() => import('../remote21/Index.tsx'));
const Fizzbuzz22 = lazy(() => import('../remote22/Index.tsx'));
const Fizzbuzz23 = lazy(() => import('../remote23/Index.tsx'));
const Fizzbuzz24 = lazy(() => import('../remote24/Index.tsx'));
const Fizzbuzz25 = lazy(() => import('../remote25/Index.tsx'));
const Fizzbuzz26 = lazy(() => import('../remote26/Index.tsx'));
const Fizzbuzz27 = lazy(() => import('../remote27/Index.tsx'));
const Fizzbuzz28 = lazy(() => import('../remote28/Index.tsx'));
const Fizzbuzz29 = lazy(() => import('../remote29/Index.tsx'));
const Fizzbuzz30 = lazy(() => import('../remote30/Index.tsx'));
const Fizzbuzz31 = lazy(() => import('../remote31/Index.tsx'));
const Fizzbuzz32 = lazy(() => import('../remote32/Index.tsx'));
const Fizzbuzz33 = lazy(() => import('../remote33/Index.tsx'));
const Fizzbuzz34 = lazy(() => import('../remote34/Index.tsx'));
const Fizzbuzz35 = lazy(() => import('../remote35/Index.tsx'));
const Fizzbuzz36 = lazy(() => import('../remote36/Index.tsx'));
const Fizzbuzz37 = lazy(() => import('../remote37/Index.tsx'));
const Fizzbuzz38 = lazy(() => import('../remote38/Index.tsx'));
const Fizzbuzz39 = lazy(() => import('../remote39/Index.tsx'));
const Fizzbuzz40 = lazy(() => import('../remote40/Index.tsx'));
const Fizzbuzz41 = lazy(() => import('../remote41/Index.tsx'));
const Fizzbuzz42 = lazy(() => import('../remote42/Index.tsx'));
const Fizzbuzz43 = lazy(() => import('../remote43/Index.tsx'));
const Fizzbuzz44 = lazy(() => import('../remote44/Index.tsx'));
const Fizzbuzz45 = lazy(() => import('../remote45/Index.tsx'));
const Fizzbuzz46 = lazy(() => import('../remote46/Index.tsx'));
const Fizzbuzz47 = lazy(() => import('../remote47/Index.tsx'));
const Fizzbuzz48 = lazy(() => import('../remote48/Index.tsx'));
const Fizzbuzz49 = lazy(() => import('../remote49/Index.tsx'));
const Fizzbuzz50 = lazy(() => import('../remote50/Index.tsx'));

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
      <Fizzbuzz1 count={16}/>
      <Fizzbuzz2 count={16}/>
      <Fizzbuzz3 count={16}/>
      <Fizzbuzz4 count={16}/>
      <Fizzbuzz5 count={16}/>
      <Fizzbuzz6 count={16}/>
      <Fizzbuzz7 count={16}/>
      <Fizzbuzz8 count={16}/>
      <Fizzbuzz9 count={16}/>
      <Fizzbuzz10 count={16}/>
      <Fizzbuzz11 count={16}/>
      <Fizzbuzz12 count={16}/>
      <Fizzbuzz13 count={16}/>
      <Fizzbuzz14 count={16}/>
      <Fizzbuzz15 count={16}/>
      <Fizzbuzz16 count={16}/>
      <Fizzbuzz17 count={16}/>
      <Fizzbuzz18 count={16}/>
      <Fizzbuzz19 count={16}/>
      <Fizzbuzz20 count={16}/>
      <Fizzbuzz21 count={16}/>
      <Fizzbuzz22 count={16}/>
      <Fizzbuzz23 count={16}/>
      <Fizzbuzz24 count={16}/>
      <Fizzbuzz25 count={16}/>
      <Fizzbuzz26 count={16}/>
      <Fizzbuzz27 count={16}/>
      <Fizzbuzz28 count={16}/>
      <Fizzbuzz29 count={16}/>
      <Fizzbuzz30 count={16}/>
      <Fizzbuzz31 count={16}/>
      <Fizzbuzz32 count={16}/>
      <Fizzbuzz33 count={16}/>
      <Fizzbuzz34 count={16}/>
      <Fizzbuzz35 count={16}/>
      <Fizzbuzz36 count={16}/>
      <Fizzbuzz37 count={16}/>
      <Fizzbuzz38 count={16}/>
      <Fizzbuzz39 count={16}/>
      <Fizzbuzz40 count={16}/>
      <Fizzbuzz41 count={16}/>
      <Fizzbuzz42 count={16}/>
      <Fizzbuzz43 count={16}/>
      <Fizzbuzz44 count={16}/>
      <Fizzbuzz45 count={16}/>
      <Fizzbuzz46 count={16}/>
      <Fizzbuzz47 count={16}/>
      <Fizzbuzz48 count={16}/>
      <Fizzbuzz49 count={16}/>
      <Fizzbuzz50 count={16}/>
      </Suspense>
        <button onClick={async () => {
            setCount((count) => count + 1)
            
            const {fizzbuzz: fizzbuzz1}= await import('../remote1/Index.tsx')
            const {fizzbuzz: fizzbuzz2}= await import('../remote2/Index.tsx')
            const {fizzbuzz: fizzbuzz3}= await import('../remote3/Index.tsx')
            const {fizzbuzz: fizzbuzz4}= await import('../remote4/Index.tsx')
            const {fizzbuzz: fizzbuzz5}= await import('../remote5/Index.tsx')
            const {fizzbuzz: fizzbuzz6}= await import('../remote6/Index.tsx')
            const {fizzbuzz: fizzbuzz7}= await import('../remote7/Index.tsx')
            const {fizzbuzz: fizzbuzz8}= await import('../remote8/Index.tsx')
            const {fizzbuzz: fizzbuzz9}= await import('../remote9/Index.tsx')
            const {fizzbuzz: fizzbuzz10}= await import('../remote10/Index.tsx')
            const {fizzbuzz: fizzbuzz11}= await import('../remote11/Index.tsx')
            const {fizzbuzz: fizzbuzz12}= await import('../remote12/Index.tsx')
            const {fizzbuzz: fizzbuzz13}= await import('../remote13/Index.tsx')
            const {fizzbuzz: fizzbuzz14}= await import('../remote14/Index.tsx')
            const {fizzbuzz: fizzbuzz15}= await import('../remote15/Index.tsx')
            const {fizzbuzz: fizzbuzz16}= await import('../remote16/Index.tsx')
            const {fizzbuzz: fizzbuzz17}= await import('../remote17/Index.tsx')
            const {fizzbuzz: fizzbuzz18}= await import('../remote18/Index.tsx')
            const {fizzbuzz: fizzbuzz19}= await import('../remote19/Index.tsx')
            const {fizzbuzz: fizzbuzz20}= await import('../remote20/Index.tsx')
            const {fizzbuzz: fizzbuzz21}= await import('../remote21/Index.tsx')
            const {fizzbuzz: fizzbuzz22}= await import('../remote22/Index.tsx')
            const {fizzbuzz: fizzbuzz23}= await import('../remote23/Index.tsx')
            const {fizzbuzz: fizzbuzz24}= await import('../remote24/Index.tsx')
            const {fizzbuzz: fizzbuzz25}= await import('../remote25/Index.tsx')
            const {fizzbuzz: fizzbuzz26}= await import('../remote26/Index.tsx')
            const {fizzbuzz: fizzbuzz27}= await import('../remote27/Index.tsx')
            const {fizzbuzz: fizzbuzz28}= await import('../remote28/Index.tsx')
            const {fizzbuzz: fizzbuzz29}= await import('../remote29/Index.tsx')
            const {fizzbuzz: fizzbuzz30}= await import('../remote30/Index.tsx')
            const {fizzbuzz: fizzbuzz31}= await import('../remote31/Index.tsx')
            const {fizzbuzz: fizzbuzz32}= await import('../remote32/Index.tsx')
            const {fizzbuzz: fizzbuzz33}= await import('../remote33/Index.tsx')
            const {fizzbuzz: fizzbuzz34}= await import('../remote34/Index.tsx')
            const {fizzbuzz: fizzbuzz35}= await import('../remote35/Index.tsx')
            const {fizzbuzz: fizzbuzz36}= await import('../remote36/Index.tsx')
            const {fizzbuzz: fizzbuzz37}= await import('../remote37/Index.tsx')
            const {fizzbuzz: fizzbuzz38}= await import('../remote38/Index.tsx')
            const {fizzbuzz: fizzbuzz39}= await import('../remote39/Index.tsx')
            const {fizzbuzz: fizzbuzz40}= await import('../remote40/Index.tsx')
            const {fizzbuzz: fizzbuzz41}= await import('../remote41/Index.tsx')
            const {fizzbuzz: fizzbuzz42}= await import('../remote42/Index.tsx')
            const {fizzbuzz: fizzbuzz43}= await import('../remote43/Index.tsx')
            const {fizzbuzz: fizzbuzz44}= await import('../remote44/Index.tsx')
            const {fizzbuzz: fizzbuzz45}= await import('../remote45/Index.tsx')
            const {fizzbuzz: fizzbuzz46}= await import('../remote46/Index.tsx')
            const {fizzbuzz: fizzbuzz47}= await import('../remote47/Index.tsx')
            const {fizzbuzz: fizzbuzz48}= await import('../remote48/Index.tsx')
            const {fizzbuzz: fizzbuzz49}= await import('../remote49/Index.tsx')
            const {fizzbuzz: fizzbuzz50}= await import('../remote50/Index.tsx')

            fizzbuzz1(16);
            fizzbuzz2(16);
            fizzbuzz3(16);
            fizzbuzz4(16);
            fizzbuzz5(16);
            fizzbuzz6(16);
            fizzbuzz7(16);
            fizzbuzz8(16);
            fizzbuzz9(16);
            fizzbuzz10(16);
            fizzbuzz11(16);
            fizzbuzz12(16);
            fizzbuzz13(16);
            fizzbuzz14(16);
            fizzbuzz15(16);
            fizzbuzz16(16);
            fizzbuzz17(16);
            fizzbuzz18(16);
            fizzbuzz19(16);
            fizzbuzz20(16);
            fizzbuzz21(16);
            fizzbuzz22(16);
            fizzbuzz23(16);
            fizzbuzz24(16);
            fizzbuzz25(16);
            fizzbuzz26(16);
            fizzbuzz27(16);
            fizzbuzz28(16);
            fizzbuzz29(16);
            fizzbuzz30(16);
            fizzbuzz31(16);
            fizzbuzz32(16);
            fizzbuzz33(16);
            fizzbuzz34(16);
            fizzbuzz35(16);
            fizzbuzz36(16);
            fizzbuzz37(16);
            fizzbuzz38(16);
            fizzbuzz39(16);
            fizzbuzz40(16);
            fizzbuzz41(16);
            fizzbuzz42(16);
            fizzbuzz43(16);
            fizzbuzz44(16);
            fizzbuzz45(16);
            fizzbuzz46(16);
            fizzbuzz47(16);
            fizzbuzz48(16);
            fizzbuzz49(16);
            fizzbuzz50(16);

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
