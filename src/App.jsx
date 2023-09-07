import React from 'react'
import './App.css'
import HeadComponent from './Component/HeadComponent/HeadComponent'
import FetchComponent from './Component/FetchComponent/FetchComponent'


function App() {
  return (
   <React.Fragment>
    <HeadComponent/>
    <FetchComponent/>
   </React.Fragment>
  )
}

export default App