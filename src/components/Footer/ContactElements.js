import styled from 'styled-components';

export const ContactContainer = styled.div`
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
`

export const ContactWrapper = styled.div`
    max-width: 600px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 960px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 10px;
    }
`

export const ContactCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 10px;
    height: 200px;
    padding: 5px;
    transition: all 0.2s ease-in-out;
`

export const ContactH1 = styled.h1`
    font-size: 2.5rem;
    color: #161616;
    margin-bottom: 10px;
    margin-top: 40px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`

export const ContactIcon1 = styled.a`
    color: #EA4335;
    font-size: 80px;
    padding: 25px;
    text-decoration: none;

    @media screen and (max-width: 768px) {
        font-size: 60px;
        padding: 20px;
    }

    &:hover {
        opacity: 80%;
        transform: scale(1.1);
        transition: all 0.2s ease-in-out;
`

export const ContactIcon2 = styled.a`
    color: #2867B2;
    font-size: 80px;
    padding: 25px;

    @media screen and (max-width: 768px) {
        font-size: 60px;
        padding: 20px;
    }

    &:hover {
        opacity: 80%;
        transform: scale(1.1);
        transition: all 0.2s ease-in-out;
`
export const ContactIcon3 = styled.a`
    color: #0088cc;
    font-size: 80px;
    padding: 25px;

    @media screen and (max-width: 768px) {
        font-size: 60px;
        padding: 20px;
    }
    
    &:hover {
        opacity: 80%;
        transform: scale(1.1);
        transition: all 0.2s ease-in-out;
    }
`