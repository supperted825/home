import React from 'react'
import {ServicesContainer, ServicesH1, ServicesH2, ServicesP, ServicesIcon, ServicesCard, ServicesWrapper} from './ServiceElements'
import Icon1 from '../../images/1.svg'
import Icon2 from '../../images/2.svg'
import Icon3 from '../../images/3.svg'


const Services = () => {
    return (
        <ServicesContainer id="services">
        <ServicesH1>Areas of Interest</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1} />
                <ServicesH2>Robotic Automation</ServicesH2>
                <ServicesP>Improving living and workspaces.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2} />
                <ServicesH2>Data Analytics</ServicesH2>
                <ServicesP>Data-driven decision making and planning.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3} />
                <ServicesH2>Machine Learning</ServicesH2>
                <ServicesP>Enhancing the quality of automated tasks.</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
