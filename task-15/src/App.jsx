import React from 'react'
import { ChangeTheme } from './components/ChangeTheme'
import useLocalStorage from './hooks/useLocalStorage'
import useWindowResize from './hooks/useWindowSize'
import useDevice from './hooks/useDevice'

const App = () => {
  const [lightMode, setlightMode] = useLocalStorage('mode', true)
  const {width} = useWindowResize()
  const device = useDevice()
  return (
    <div style={
      {
      backgroundColor: `${width > 786 && !lightMode ? "0f172a" : "f8fafc"}`,
      }
    }>
      <div>
        <h1>{device}</h1>
      </div>
      <ChangeTheme setlightMode={setlightMode}/>
    </div>
  )
}

export default App