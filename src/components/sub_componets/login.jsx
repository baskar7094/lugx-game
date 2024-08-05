import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='bg-img'>
      <form className='flex flex-col gap-8  justify-center items-center w-1/2 mx-auto p-5'>
        <h2 className='text-red-500 animate-pulse text-md text-center '>enter login username & password | mobile number</h2>
        <label htmlFor="" className='text-white'>username</label>
        <input type="text" placeholder='username' className='py-1' />
        <label htmlFor="" className='text-white'>password</label>
        <input type="password" placeholder='password' className='py-1' />
        <input type="submit" value="submit" className='ring-2 px-3 py-2 text-center text-white '/>
      </form>
      <p className='text-green-900 w-fit mx-auto px-3 py-1 ring-2 my-5 ring-green-800 animate-bounce'>

      <Link to={'/rigistar'}>now get free rigistar account  </Link>
      </p>
    </div>
  )
}
