import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Main from './components/main/Main'
import Splash from './components/splash-screen/Splash'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Splash />
      <Main />
    </div>
  )
}

export default App
