import { useState } from 'react'
import HooksExample from './hooks.jsx'
import HooksExample2 from './hooks2.jsx'
import HooksExample3 from './hooks3.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HooksExample />
      <HooksExample2 />
      <br />
      <HooksExample3 />
    </>
  )
}

export default App