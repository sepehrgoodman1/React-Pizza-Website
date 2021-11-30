import React,{useState} from 'react'
import Navbar from '../Navbar'
import SideBar from '../SideBar'
import {HeroContainer , HeroContent, HeroH1, HeroItems, HeroP, HeroBtn} from './HeroElement'

const Hero = () => {
    const [isOpen, setisOpen] = useState(false);
    const toggle = () =>{
        setisOpen(!isOpen);
    }
    return (
        <HeroContainer>
            <Navbar toggle={toggle}/>
            <SideBar isOpen={isOpen} toggle={toggle}/>
            <HeroContent>
                <HeroItems>
                    <HeroH1>Greatest Pizza Ever</HeroH1>
                    <HeroP>Ready in 60 Seconds</HeroP>
                    <HeroBtn>Place Order</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero;