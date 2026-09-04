// import 
import './App.css'
import { useState } from 'react';
import MainScreen from './components/mainscreen/MainScreen'
import Sidebar from './components/sidebar/Sidebar'

function App() {
  const [decide, setDecide] = useState(true);

  return (
    <>
      <div className={`layout ${decide ? 'expanded' : 'collapsed'}`}>
        <Sidebar decide={decide} setDecide={setDecide}/>
        <MainScreen />
      </div>
    </>
  )
}

export default App
