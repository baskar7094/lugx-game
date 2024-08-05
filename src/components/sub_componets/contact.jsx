import React from 'react'
import Navbar from '../navbar'
import { FooterCompon } from '../home'

export default function Contact() {
  return (
    <div>
<div className='bg-img  '>
<Navbar/>
<div className='text-white  bg-img py-20'>
  <h2 className='text-2xl lg:text-3xl text-center font-bold py-4 px-4'>my company details from contact</h2>
  <address className='p-5 flex flex-col gap-10 md:text-center lg:text-xl'>
  name : kavin <br />
  contact email : personalm882@gmail.com <br />
  contact mobile number : +1 1289798423 <br />

  from online services <span className='text-red-500'>please contact email address (or) mobile number</span>
  </address>
</div>
<FooterCompon/>
</div>
    </div>
  )
}
