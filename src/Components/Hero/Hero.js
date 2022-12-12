import React from 'react'
import "./Hero.css"
import Logo from '../../Asset/heroImage.png'
export default function Hero(props) {
    

    return (
        
                 <div className='heroContainer'>
                    <div className='heroImage'>
                    <img src={Logo} alt="Hero"/>
                    </div>
                
            <div className='heroText'>
                <p>Watch</p>
                <p>something</p>
                <p>incredible</p>
            </div>
            <div className='mobileHeroText'>
                <p>Watch something <br/> incredible</p>
                
            </div>

        </div>
     
       
    )
}
