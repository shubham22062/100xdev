import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { notifications, totalNotificationSelector } from './atoms'
import { useEffect } from 'react'
import axios from 'axios'

function App() {
  return <RecoilRoot>
    <MainApp/>
  </RecoilRoot>
}


function MainApp() {
  const [networkCount, setNetworkCount] = useRecoilState(notifications)
  
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);


  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/notifications")
      .then(re => {
      setNetworkCount(resizeBy.data)
    })
  }, [])
  

  return (
    <>
      <button>Home</button>


      <button>My network({networkCount.networks >=100? "99+":networkCount.networks})</button>
      <button>Jobsk({networkCount.jobs})</button>
      <button>Messaging({networkCount.messagind})</button>
      <button>Notifiactions({networkCount.notifications})</button>



      <button>Me ({totalNotificationCount})</button>
      

    </>
  )
}