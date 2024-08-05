import React from 'react'
import Navbar from '../navbar'
import Contact from '../contact'
import { FooterCompon } from '../home'
import { TopCard } from '../cards'
import { Link } from 'react-router-dom'
export default function Spical() {
  return (
    <div>
      <section>
        <div className='bg-img'>
        <Navbar/>
        </div>
        <section className='my-3 relative' >
          <img src="https://img.freepik.com/free-vector/esport-gaming-banner-geometric-style_1017-32284.jpg?size=626&ext=jpg"
          className='w-screen mx-auto h-60 lg:h-96  top-0 object-cover object-center bg-cover relative '
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
        <div className='mx-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10'>
        
        <ACtionGames
         to="https://play.google.com/store/apps/details?id=com.dts.freefiremax&pcampaignid=web_share"
          img="https://w0.peakpx.com/wallpaper/105/282/HD-wallpaper-fire-ff-games-thumbnail.jpg"  
          name="free fire" />
        <ACtionGames 
        to="https://play.google.com/store/apps/details?id=com.activision.callofduty.shooter&pcampaignid=web_share" 
        img="https://play-lh.googleusercontent.com/cPA0GowrQY5mRLdx_YifGhtLjvllchoef2pyWgGvpAnu_rA3CGOY_VVHpX-HwCMks_8r=w2560-h1440-rw"  
        name="call of duty" />
        <ACtionGames 
        to="https://play.google.com/store/apps/details?id=com.pubg.imobile&pcampaignid=web_share"
         img="https://play-lh.googleusercontent.com/qy0RFNlV0PoUHTI0WGz0MQyll3Y81xbmKNy8xQkoP8aAa1JM5dmJO9f23rNoXuXCG9w=w2560-h1440-rw" 
          name="pubg" />
        <ACtionGames 
        to="https://play.google.com/store/apps/details?id=com.gameloft.android.ANMP.GloftM5HM&pcampaignid=web_share" 
        img="https://play-lh.googleusercontent.com/N5OhX0Em8Uuu5B4JaXKZmwzy-0UUfGiF3OjDxdGic1m49DJyNujFgPFZSa0AJf4hiIKP=s256-rw" 
         name="Modern Combat 5: mobile FPS" />
        <ACtionGames 
        to="https://play.google.com/store/apps/details?id=com.pixonic.wwr&pcampaignid=web_share" 
        img="https://play-lh.googleusercontent.com/nBKW42ZnRWT4Y_uzqwwH_ooLsuV_gu53UUdCpQMurU1QlggoLHZ2C5G2fDF7-2Iji38=s256-rw" 
         name="War Robots Multiplayer Battles" />
        <ACtionGames 
        to="https://play.google.com/store/apps/details?id=com.criticalforceentertainment.criticalops&pcampaignid=web_share" 
        img="https://play-lh.googleusercontent.com/EPb8BSLfRYiTScThq4f0fVT_SWIYZXdUyPGX0dopRS_WmbN1t0i6r8Q-Md9SFqlgtnk=s256-rw" 
        name="Critical Ops: Multiplayer FPS"/>
        <ACtionGames  
        to="https://play.google.com/store/apps/details?id=com.starplay.spider.fighter3d&pcampaignid=web_share" 
        img="https://play-lh.googleusercontent.com/-pSpSFZwKqMAmQdha-yTT1TjtHXEOomwmP4WLHZVYGSR6ayLcvUpeMqkLYup7ymzNA=s256-rw" 
        name="Spider Fighter 2"/>
        <ACtionGames
         to="https://play.google.com/store/apps/details?id=com.Shooter.ModernWarships&pcampaignid=web_share" 
        img="https://play-lh.googleusercontent.com/lcPH5Me8JgzbPlRzYaKKYjaYxCzbIBlkcmCfoWxt3APMwk2FItG_yhJf0LwrfXNeIQ=s256-rw" 
        name="modern warships navvel battals"/>
     
      
        </div>
    )
}

function ACtionGames(props){
    return(
        <>
        <div className=''>


<div className=''>
      <Link to={props.to}>
      <img src={props.img}
      className='w-52 h-60 object-cover rounded-lg m-auto object-center'
      />
      </Link>
      <Link to={props.to}>
<h4 className='font-bold text-center text-xl py-3 '>{props.name} </h4>
      </Link>
</div>






        
        </div>
        </>
    )
}
