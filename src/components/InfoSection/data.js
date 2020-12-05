import PDF from '../Documents/Resume051220.pdf';
import Big1 from '../../images/Big1.svg'
import Big2 from '../../images/Big2.svg'
import Big3 from '../../images/Big3.svg'

export const homeObjOne = {
    id: 'about',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Jonathan Tan',
    headline: 'Undegraduate in Mechanical Engineering (Robotics)',
    description: 'Student of the E-Scholars Programme (NUS), with an avid interest for machine learning and automation.',
    buttonLabel: 'Contact Me',
    to: 'contact',
    imgStart: false,
    img: Big1,
    alt: 'projects',
    dark: false,
    primary: false,
    darkText: true,
};

export const homeObjTwo = {
    id: 'projects',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Blog',
    headline: 'Projects & Write-Ups',
    description: 'In this site, I share some of my projects, along with other educational content.',
    buttonLabel: 'Coming Soon...',
    to: '#',
    imgStart: true,
    img: Big2,
    alt: 'projects',
    dark: false,
    primary: false,
    darkText: true,
};

export const homeObjThree = {
    id: 'resume',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Portfolio',
    headline: 'My Resume',
    description: "View a comprehensive record of my background, edcuation, and work experience.",
    buttonLabel: 'Download',
    to: PDF,
    imgStart: false,
    img: Big3,
    alt: 'projects',
    dark: true,
    primary: true,
    darkText: false,
};