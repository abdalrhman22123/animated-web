import React, { Component } from 'react';
import "./Head.css"
import bg from "../assets/Image.svg"
import Paper from "../assets/paper.svg"
import btn from "../assets/button.svg"
import kind from "../assets/kind.svg"
import croco from "../assets/croco.svg"
const Heads = () => {
    return ( <>
    <img className='img' src={bg}  />
    <img className='paper' src={Paper} />
    <div className='btns'>
    <img className='btn' src={btn}  />
    <div className='cont'>contact</div>
    </div>
    <img className='kind' src={kind}/>
    <img className='croco' src={croco} />
    </> );
}
 
export default Heads;