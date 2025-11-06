import React, { Component } from 'react';
import "./section2.css"
import business from "../assets/business.svg"
import mag from "../assets/mag.svg"
import opti from "../assets/optimal.svg"
import info from "../assets/info.svg"
const Business = () => {
    return ( <>
    <img className='bus' src= {business}  />
    <img className='mag' src={mag} />
    <img className='opti' src={opti} />
    <img className='info' src={info} />
    </> );
}
 
export default Business;