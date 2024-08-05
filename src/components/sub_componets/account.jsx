import React from 'react'
import Login from './login'
import Navbar from '../navbar'
import { FooterCompon } from '../home'

export default function Account() {
  return (
    <div>
        <div className='bg-img'>

        <Navbar/>
        </div>
      <Login/>
      <FooterCompon/>
    </div>
  )
}
