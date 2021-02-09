import React from 'react';
import styled from 'styled-components';
const ContactComp = () => {
    return (
        <section id="contact">
      <form action="">
        <label htmlFor="newsletter">Subscribe newsletter</label>
        <input
        style={{paddingLeft : 24  }} 
        className="newsletter-form" type="text" name="newsletter" placeholder='Enter your email' id="newsletter"/>
    <div className="submit-btn">
  <input id="submit" type="submit" value="send"/>
  <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M11.009 0.477212L14.4703 3.93403C14.6827 4.14615 14.6827 4.49008 14.4703 4.70221L11.009 8.15902C10.7966 8.37115 10.4523 8.37115 10.2399 8.15902C10.0275 7.94689 10.0275 7.60297 10.2399 7.39084L12.7726 4.8613L1.17346 4.8613C0.873082 4.8613 0.629578 4.61811 0.629578 4.31811C0.629578 4.01812 0.873083 3.77493 1.17346 3.77493L12.7726 3.77493L10.2399 1.24539C10.0275 1.03327 10.0275 0.689339 10.2399 0.477212C10.4523 0.265084 10.7966 0.265084 11.009 0.477212Z" fill="#EB7700"/>
    </svg>
</div>
      </form>
      <H2>CONTACT US</H2>
      <div className="container offices">
        <div className="office">
          <div className="country">
            DE
          </div>
          <div className="office-text">
            Frauentorgraben 5    <br/>
            90443 Nürnberg <br/>
            +49 911 2847 88489 <br/>
            <a href="mailto:info@in-tecenergy.com">info@in-tecenergy.com</a>         
          </div>  
        </div>
        <div className="office">
          <div className="country">
            DE
          </div>
          <div className="office-text">
            Frauentorgraben 5    <br/>
            90443 Nürnberg <br/>
            +49 911 2847 88489 <br/>
            <a href="mailto:info@in-tecenergy.com">info@in-tecenergy.com</a>         
          </div>  
        </div>
        <div className="office">
          <div className="country">
            DE
          </div>
          <div className="office-text">
            Frauentorgraben 5    <br/>
            90443 Nürnberg <br/>
            +49 911 2847 88489 <br/>
            <a href="mailto:info@in-tecenergy.com">info@in-tecenergy.com</a>         
          </div>  
        </div>
        <div className="office">
          <div className="country">
            DE
          </div>
          <div className="office-text">
            Frauentorgraben 5  <br/>
            90443 Nürnberg <br/>
            +49 911 2847 88489 <br/>
            <a href="mailto:info@in-tecenergy.com">info@in-tecenergy.com</a>         
          </div>  
        </div>
        <div className="office">
          <div className="country">
            DE
          </div>
          <div className="office-text">
            Frauentorgraben 5    <br/>
            90443 Nürnberg <br/>
            +49 911 2847 88489 <br/>
            <a href="mailto:info@in-tecenergy.com">info@in-tecenergy.com</a>         
          </div>  
        </div>
        <div className="office">
          <div className="country">
            DE
          </div>
          <div className="office-text">
            Frauentorgraben 5 <br/>
            90443 Nürnberg<br/>
            +49 911 2847 88489 <br/>
            <a href="mailto:info@in-tecenergy.com">info@in-tecenergy.com</a>         
          </div>  
        </div>
      </div>
    </section>
    );
}

export default ContactComp;


const H2 = styled.h2`
font-size: 18px;
font-style: normal;
font-weight: 900;
line-height: 48px;
letter-spacing: 0px;
text-align: center;

`;