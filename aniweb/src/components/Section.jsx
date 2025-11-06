import React, { Component } from 'react';
import "./Section.css"
import rest from "../assets/rest.svg"
import plates from "../assets/plates.svg"
import fans from "../assets/fan.svg"
import build from "../assets/build.svg"
import champ from "../assets/champ.svg"
import girl from "../assets/girl.svg"
import hand from "../assets/hands.svg"
import tools from "../assets/tools.svg"
import keep from "../assets/keep.svg"
const Sec = () => {
    return ( <>
 <div className='secc'>
        <div className='pud'>
            THE <br />
        PROOF <br />
        IS IN THE <br />
        PUDDING
        
    <div className='stack'>A stack of stuff we’ve been working on <br />
        lately.</div>
        </div>
        <div className='imgs'>
        <img className='rest' src={rest} />
        <img className='rest' src={plates} />
        <img className='rest' src={fans}  />
        <img className='rest' src={build} />
        <img className='rest' src={champ}/>
        <img className='rest' src={girl} />
        <img className='rest' src={hand} />
        <img className='rest' src={tools} />
        <img className='keep' src={keep} />
        </div>
 </div>
    </> );
}
 
export default Sec;