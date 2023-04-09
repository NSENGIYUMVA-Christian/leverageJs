import { useState } from 'react'
import List from "./List"


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <List/>
    </div>
  )
}

export default App
