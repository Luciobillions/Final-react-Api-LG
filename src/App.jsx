import { useState } from 'react'
import Logomorty from '/icons8-morty.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>

        <a href="https://vitejs.dev" target="_blank">
          <img src={Logomorty} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={Logomorty} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <section>
      <a href="./public/titulo.gif"></a>
      </section>
      <div className="card">
      </div>

    </>
  )
}

export default App
