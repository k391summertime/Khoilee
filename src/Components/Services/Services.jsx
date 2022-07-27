import React from "react";  
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from "./resume.pdf";
import {themeContext} from "../../Context";
import { useContext } from "react";
import {motion} from 'framer-motion';

const Services = ()=>{
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const transition = {duration :2, type: 'spring'}
    return(
    <div className="services" id='Services'>
        <div className="awesome">
            <span style={{color: darkMode? 'white' :''}}>My Awesome</span>
            <span>Services</span>
            <spane>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            <br/>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 

            </spane>
            <a href={Resume} download><button className="button s-button">Download CV</button></a>
            <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
        </div>
        <div className="cards">
            <motion.div 
            initial = {{left:'50%'}}
            whileInView = {{left:'15rem'}}
            transition= {transition}
            
            style={{left: "14rem"}}>
                <Card
                emoji= {HeartEmoji}
                heading={'Design'}
                detail={"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
                />
            </motion.div>
            <motion.div 
            initial={{ left: "-11rem", top: "12rem" }}
            whileInView={{ left: "-4rem" }}
            transition= {transition}
            
            style={{top:'12rem',left: "-4rem"}}>
                <Card
                emoji= {Glasses}
                heading={'Developer'}
                detail={"Html, Css, Javascript, React, ReactDOM, ReactDOM.render, ReactDOM.render"}
                />
            </motion.div>
            <motion.div 
            initial={{ top: "19rem", left: "25rem" }}
            whileInView={{ left: "12rem" }}
            transition= {transition}
            
            
            style={{top:'19rem',left: "12rem"}}>
                <Card
                emoji= {Humble}
                heading={'UI/UX'}
                detail={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"}
                />
            </motion.div>
            <div className="blur s-blur2" style={{background:'var(--purple)'}}></div>
        </div>
        
    </div>
    )
}
export default Services