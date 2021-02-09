import React from 'react';
// import img4 from '../../assets/logo_INTEC_color.svg'
import styled from 'styled-components';
import Image  from 'next/image'
const FooterComp = () => {
    return (
        <Footer>
      <div className="container">
        <div className="footer-left">
          <Image height='30px' width='auto' src='/assets/logo_INTEC_color.svg' alt=""/>
          <LinkHover>Copyright © 2021 INTEC Energy Solutions</LinkHover>
        </div>
        <div className="footer-right">
          <LinkHover>Cookie Notice</LinkHover>
          <LinkHover>Privacy Notice</LinkHover>
          <LinkHover>Design by: mocio.co</LinkHover>
        </div>
      </div>
    </Footer>
    );
}

export default FooterComp;

const Footer = styled.footer`
  font-size :12px;
`;
const LinkHover = styled.p`
    transition : all ease-in-out .3s ;
    cursor : pointer;
    color : #959595;
    &:hover{
      color : #EB7700;
    }
`;