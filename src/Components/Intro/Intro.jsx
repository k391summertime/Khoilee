import React from "react";  
import './Intro.css'
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import khoilee from "../../img/khoilee.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png"
import glassefimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import {themeContext} from "../../Context";
import { useContext } from "react";
import {motion} from 'framer-motion';

const Intro = ()=>{

    const transition = {duration :2, type: 'spring'}

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return(
   <div className="intro">
    <div className="i-left">
        <div className="i-name">
            <span style={{color: darkMode? 'white' :''}}>Hy! I am </span>
            <span>Phuoc Kec To</span>
            <span>Frontend Developer with high level of 
            experience in web designing and development, 
            producting the Quality work
            </span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons">
            <img src={Github} alt='' />
            <img src={LinkedIn} alt='' />
            <img src={Instagram} alt='' />
        </div>
    </div>
    <div className="i-right">
            <img src={Vector1} alt='' />
            <img src={Vector2} alt='' />
            <img src={khoilee} alt='' />
            <motion.img 
            initial = {{left:'-60%'}}
            whileInView = {{left:'-24%'}}
            transition= {transition}
            src={glassefimoji} alt='' />
    <motion.div 
        initial = {{top:'-4%',left:'100%'}}
        whileInView = {{left:'50%'}}
        transition= {transition}
    
    className='floating-div'
    style={{top: '5%', left: '60%'}}>
    
        <FloatingDiv image={crown} txt1='Web' txt2='Developer'/>
    </motion.div>
    <motion.div
        initial = {{top:'18rem',left:'5rem'}}
        whileInView = {{left:'1rem'}}
        transition= {transition}
    
    className='floating-div'
    style={{top: '18rem', left: '0rem'}}>
        <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award'/>
    </motion.div>
    <div className="blur" style={{background: 'rgba(238 210 255)'}}></div>
    <div className="blur" style={{background: '#C1F5FF', top:'14rem', width:'21rem', height:'12rem',left:'-9rem'}}></div>
    </div>
   </div>
    )
}
export default Intro
    