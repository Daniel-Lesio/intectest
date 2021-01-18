import React from 'react';
import styled from 'styled-components'
import Image from 'next/image'
const SocialsComp = () => {
    return (
        <section id="social">
        <h4>WE ARE IN SOCIAL MEDIA</h4>
        <SocialSign>SOCIAL MEDIA</SocialSign>
        <div className="social-icons">
            <Image src='/assets/socials/linked_white.svg' width={50} height={50} alt=""/>
            <Image src='/assets/socials/twittter_white.svg' width={50} height={50} alt=""/>
            <Image src='/assets/socials/facebook_white.svg' width={50} height={50} alt=""/>
        </div>
    </section>
    );
}

export default SocialsComp;

const SocialSign = styled.div`
    position : absolute;
    transform : translateX(-50%);
    left : 50%;
    bottom : 16px;
    white-space: nowrap;
    font-style: normal;
    font-weight: 800;
    font-size: 120px;
    line-height: 48px;
    text-align: center;
    text-transform: uppercase;
    color: #FFFFFF;
    opacity: 0.1;
`