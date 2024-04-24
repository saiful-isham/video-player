import React from 'react'
import Add from '../Componets/Add'
import { Link } from 'react-router-dom'
import View from '../Componets/View'
import Catogory from '../Componets/Catogory'

function Home() {
  return (
    <>
    <div className="container my-5 d-flex justify-content-between">
      <Add/>
      <Link to={'/History'}> Watch History</Link>
    </div>
    <div className="container-fluid row my-5">
      <div className="col-lg-6">
        <h3>All Videos</h3>
        <View/>
      </div>
      <div className="col-lg-6">
        <Catogory/>

      </div>
    </div>
      
    </>
  )
}

export default Home
