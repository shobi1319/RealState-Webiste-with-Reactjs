import React from "react";
import './Header.css'
const Header = ()  =>{
    return (
       <section className="head-wrapper">
<div className="head-container flexCenter padding innerWidth">
    <img src="/public/logo1.png" alt="" width={100}/>


    <div className="head-menu flexCenter">
        <a href="">Residencies</a>
        <a href="">Our Values</a>
        <a href="">Contact Us</a>
        <a href="">Get Started</a>
        <button>
        <a href="">Contact</a>
        </button>
    </div>
</div>
       </section>
    )
} 
export default Header;