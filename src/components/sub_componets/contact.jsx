import React from 'react'

export default function Contact() {
  return (
    <div>
   <form action="" className='bg-img text-white flex flex-col justify-center w-11/12 gap-5 py-5  text-center'>
   <h2 className='text-white text-xl text-center py-3 animate-bounce leading-tight uppercase'>flied the details</h2>
    <label htmlFor="" className=''>user name</label>
    <input type="text" placeholder='enter user name ' className='text-black py-1' />
    <label htmlFor="">last name</label>
    <input type="text" placeholder='enter last name'  className='text-black py-1'/>
    <label htmlFor="">age</label>
    <input type="text" placeholder='enter your age'  className='text-black py-1'/>
    <label htmlFor="">gender</label>
    <select name="" id="" className='text-black py-1'>
        <option value="male" className='text-black py-1'>male</option>
        <option value="female" className='text-black py-1'>female</option>
    </select>
    <label htmlFor="">email</label>
    <input type="email" placeholder='enter your email' className='text-black py-1'  />
<button type='submit' className='ring-2  w-fit m-auto px-4 py-1 hover:shadow-2xl text-lg capitalize'>submit</button>
   </form>
    </div>
  )
}
