import React from 'react';
import {ContactContainer, ContactWrapper, ContactH1, ContactCard, ContactIcon1, ContactIcon2, ContactIcon3} from './ContactElements'
import {FaTelegram, FaAt, FaLinkedin} from "react-icons/fa"

const Contact = () => {
    return (
        <>
            <ContactContainer id="contact">
                <ContactH1>Contact Me</ContactH1>
                <ContactWrapper>
                    <ContactCard>
                        <ContactIcon1 href="mailto:jonathantyt@u.nus.edu">
                            <FaAt />
                        </ContactIcon1>
                        <ContactIcon2 target="_blank" href="https://www.linkedin.com/in/jonathan-tan-a73580174">
                            <FaLinkedin />
                        </ContactIcon2>
                        <ContactIcon3 target="_blank" href="https://t.me/supperted">
                            <FaTelegram />
                        </ContactIcon3>
                    </ContactCard>
                </ContactWrapper>
                </ContactContainer>
        </>
    )
}

export default Contact
