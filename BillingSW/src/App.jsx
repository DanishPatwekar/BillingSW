import { useState, useEffect } from 'react'
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
