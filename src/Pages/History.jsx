import React from 'react'
import { Link } from 'react-router-dom'


function History() {
  return (
    <div className='my-5 container'>
      <div className="d-flex justify-content-center">
        <h3>Watch History</h3>
        <Link to={'/home'}>Back to Home</Link>

      </div>
      <table className='table my-5'>
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>Video Link</th>
            <th>Time</th>
            <th><i className='fa-solid fa-ellipsis-vertical'></i></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>avasham</td>
            <td><a href="https://www.youtube.com/watch?v=tOM-nWPcR4U" target='-black'>https://www.youtube.com/watch?v=tOM-nWPcR4U</a></td>
            <td>22/4/2024 10:55</td>
            <td> <button className='btn'><i className='fa-solid fa-trash text-danger'></i></button></td>
          </tr>
        </tbody>

      </table>
      
    </div>
  )
}

export default History
