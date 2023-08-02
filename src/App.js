import { Router } from "react-router-dom"
import { GlobalState } from './context/GlobalState'

function App() {
  return (

    <GlobalState>
      <Router />
    </GlobalState>

  )
}

export default App