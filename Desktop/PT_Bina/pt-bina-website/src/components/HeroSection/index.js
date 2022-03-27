import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import {Button} from '../ButtonElements'

const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
        </HeroBg>
        <HeroContent>
            <HeroH1>Unlocking Indonesia and the World's Agriculture Potential</HeroH1>
            <HeroP>
                Contact us and become our partner! 
                Let's connect and fill the agricultural void of the world. 
            </HeroP>
            <HeroBtnWrapper>
                <Button to="contact" onMouseEnter={onHover} onMouseLeave={onHover}
                primary="true"
                dark="true"
                >
                    Contact Us {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection