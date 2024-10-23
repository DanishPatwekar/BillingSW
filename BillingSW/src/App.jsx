import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Loder from './components/Loading'
import MainPage from './components/MainPage'


function App() {
  const[loading,setloading]=useState(true);
  useEffect(()=>{
    setloading(true);
    setTimeout(() => {
      setloading(false)
    },6000);

  },[]);
  return (
    <>
      {loading?<Loder/>:<><MainPage/></>}
    </>
  )
}

export default App
