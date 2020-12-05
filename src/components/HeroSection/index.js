import React, {useState} from 'react';
import video from '../../videos/video.mp4';
import Button from '../ButtonElements';
import { HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements';

const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Welcome to My Website</HeroH1>
                <HeroP>
                    Read about me here.
                </HeroP>
                <HeroBtnWrapper>
                    <Button
                    to="about"
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary ='true'
                    dark ='true'
                    smooth={true} duration={500} spy={true} exact='true' offset={-80}
                    >
                        Read More {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection