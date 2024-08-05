import React from 'react'
import Navbar from '../navbar'
import Contact from '../contact'
import { FooterCompon } from '../home'
import { TopCard } from '../cards'
export default function Spical() {
  return (
    <div>
      <section>
        <div className='bg-img'>
        <Navbar/>
        </div>
        <section className='my-3 relative' >
          <img src="https://img.freepik.com/free-vector/esport-gaming-banner-geometric-style_1017-32284.jpg?size=626&ext=jpg"
          className='w-screen h-60 top-0 relative '
          />
        </section>
        <Cards/>
        <div>
            <Contact/>
<FooterCompon/>
        </div>
      </section>
    </div>
  )
}

function Cards(props){
    return(
        <>
        
        <ACtionGames/>
        </>
    )
}

function ACtionGames(props){
    return(
        <>
        <div className='mx-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10'>
<div className=''>
      <img src="https://w0.peakpx.com/wallpaper/105/282/HD-wallpaper-fire-ff-games-thumbnail.jpg"
      className='w-52 h-60 object-cover rounded-lg m-auto object-center'
      />
<h4 className='font-bold text-center text-xl py-3 '>free fire </h4>
</div>
<div className=''>
      <img src="https://play-lh.googleusercontent.com/cPA0GowrQY5mRLdx_YifGhtLjvllchoef2pyWgGvpAnu_rA3CGOY_VVHpX-HwCMks_8r=w2560-h1440-rw"
      className='w-52 h-60 object-cover rounded-lg m-auto '
      />
<h4 className='font-bold text-center text-xl py-3 '>call of duty </h4>
</div>
<div className=''>
      <img src="https://play-lh.googleusercontent.com/qy0RFNlV0PoUHTI0WGz0MQyll3Y81xbmKNy8xQkoP8aAa1JM5dmJO9f23rNoXuXCG9w=w2560-h1440-rw"
      className='w-52 h-60 object-cover rounded-lg m-auto '
      />
<h4 className='font-bold text-center text-xl py-3 '>pubg </h4>
</div>
<div className=''>
      <img src="https://play-lh.googleusercontent.com/lcPH5Me8JgzbPlRzYaKKYjaYxCzbIBlkcmCfoWxt3APMwk2FItG_yhJf0LwrfXNeIQ=s256-rw"
      className='w-52 h-60 object-cover rounded-lg m-auto '
      />
<h4 className='font-bold text-center text-xl py-3 '>modern warships navvel battals </h4>
</div>
<div className=''>
      <img src="https://play-lh.googleusercontent.com/EPb8BSLfRYiTScThq4f0fVT_SWIYZXdUyPGX0dopRS_WmbN1t0i6r8Q-Md9SFqlgtnk=s256-rw"
      className='w-52 h-60 object-cover rounded-lg m-auto '
      />
<h4 className='font-bold text-center text-xl py-3 '>Critical Ops: Multiplayer FPS </h4>
</div>
<div className=''>
      <img src="https://w0.peakpx.com/wallpaper/105/282/HD-wallpaper-fire-ff-games-thumbnail.jpg"
      className='w-52 h-60 object-cover rounded-lg m-auto '
      />
<h4 className='font-bold text-center text-xl py-3 '>free fire </h4>
</div>
<div className=''>
      <img src="https://play-lh.googleusercontent.com/-pSpSFZwKqMAmQdha-yTT1TjtHXEOomwmP4WLHZVYGSR6ayLcvUpeMqkLYup7ymzNA=s256-rw"
      className='w-52 h-60 object-cover rounded-lg m-auto '
      />
<h4 className='font-bold text-center text-xl py-3 '>Spider Fighter 2</h4>
</div>
<div className=''>
      <img src="https://play-lh.googleusercontent.com/nBKW42ZnRWT4Y_uzqwwH_ooLsuV_gu53UUdCpQMurU1QlggoLHZ2C5G2fDF7-2Iji38=s256-rw"
      className='w-52 h-60 object-cover rounded-lg m-auto '
      />
<h4 className='font-bold text-center text-xl py-3 '>War Robots Multiplayer Battles </h4>
</div>
<div className=''>
      <img src="https://play-lh.googleusercontent.com/N5OhX0Em8Uuu5B4JaXKZmwzy-0UUfGiF3OjDxdGic1m49DJyNujFgPFZSa0AJf4hiIKP=s256-rw"
      className='w-52 h-60 object-cover rounded-lg m-auto '
      />
<h4 className='font-bold text-center text-xl py-3 '>Modern Combat 5: mobile FPS</h4>
</div>





        
        </div>
        </>
    )
}
