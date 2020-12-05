import React, {useState} from 'react'
import Contact from '../components/Footer';
import HeroSection from '../components/HeroSection';
import {InfoSection1, InfoSection2} from '../components/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/data';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Sidebar from '../components/Sidebar';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection />
            <InfoSection1 {...homeObjOne}/>
            <InfoSection1 {...homeObjTwo}/>
            <InfoSection2 {...homeObjThree}/>
            <Services />
            <Contact />
        </>
    )
}

export default Home
