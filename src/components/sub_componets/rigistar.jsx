import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../navbar'
import { FooterCompon } from '../home'

export default function Rigistar() {
  return (
    <div>
        <div className='bg-img'>

        <Navbar/>
  <form className='flex flex-col gap-5 justify-center items-center w-1/2 mx-auto bg-img p-5'>
        <h2 className='text-md  py-3 animate-pulse text-red-500'>enter login username & password | mobile number</h2>
        <label htmlFor="" className='text-white'>username</label>
        <input type="text" placeholder='username' className='py-1'/>
       <label htmlFor="" className='text-white'>age</label>
       <input type="text" placeholder='enter age' className='py-1' />

        <label htmlFor="" className='text-white'>password</label>
        <input type="password" placeholder='password' className='py-1' />
       <label htmlFor="" className='text-white'>confirm password</label>
       <input type="password" placeholder='confirm password' className='py-1' />
        <input type="submit" value="submit"  className='ring-2  px-4 py-2 text-white'/>
      </form>      
      <p className='text-green-900 text-center ring-2  w-fit mx-auto py-1 px-3 ring-green-800 my-5 animate-bounce '>

      <Link to={'/account'} >from login</Link>
      </p>
      <FooterCompon/>
      </div>

    </div>
  )
}
