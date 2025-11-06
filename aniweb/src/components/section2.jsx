import React, { Component } from 'react';
import "./section2.css"
import business from "../assets/business.svg"
import mag from "../assets/mag.svg"
const Business = () => {
    return ( <>
    <img className='bus' src= {business}  />
    <img className='mag' src={mag} />
    </> );
}
 
export default Business;