import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserChat from './components/UserChat'
import ChatApp from './components/chatComponentTwo/ChatApp'
import ChatWidget from './components/chatComponentThree/ChatWidget'
import ChatWidgetFour from './components/chatComponentFour/ChatWidgetFour'
import PerfectChatOne from './components/perfectChatCode/PerfectChatOne'
import ChatWidgetFive from './components/chatComponentFive/ChatWidgetFive'
import ChatWidgetSix from './components/chatComponentSix/ChatWidgetSix'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <UserChat /> */}
      {/* <ChatApp /> */}
      {/* <ChatWidget /> */} {/* WORKING BUT JUST ONE CHAT */}
      {/* <ChatWidgetFour />   {/* Completed Multiple CHAT */}
      {/* <ChatWidgetFive />*/} {/* Copy of ChatWidgetFour  */}
      <ChatWidgetSix />

      
      {/* <PerfectChatOne /> */} {/* Perfect chat so far the best version */}
    </>
  )
}

export default App
