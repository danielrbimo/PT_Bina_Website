import React, {useState} from 'react';
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import ProductSection from '../components/Products';
import { homeObjOne } from '../components/InfoSection/Data';
import Footer from '../components/Footer';
import Team from '../components/Team';
import Contact from '../components/Contact';
import DiscoverSection from '../components/DiscoverSection';


const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };

  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle}/> 
    <HeroSection/>
    <InfoSection {...homeObjOne}/>
    <Team/>
    <ProductSection/>
    <DiscoverSection/>
    <Contact/>
    <Footer/>
    </>
  );
};

export default Home