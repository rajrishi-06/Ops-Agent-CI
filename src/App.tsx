// import 
import './App.css'
import { useState } from 'react';
import MainScreen from './components/mainscreen/MainScreen'
import Sidebar from './components/sidebar/Sidebar'

function App() {
  const [decide, setDecide] = useState(true);
  const [newchat, setNewChat] = useState(false);

  return (
    <div className={`layout ${decide ? 'expanded' : 'collapsed'}`}>
      {decide && 
        <Sidebar 
         decide={decide} setDecide={setDecide} 
         newChat={newchat} setNewChat={setNewChat}
         />}
      <MainScreen 
        decide={decide} setDecide={setDecide}
        newChat={newchat} setNewChat={setNewChat}
      />
    </div>
  )
}

export default App
