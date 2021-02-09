import React,{useEffect} from 'react';
import styled from 'styled-components';
import Button from "../Layout/Button";
import Layout from '../Layout/Layout';
const aboutImg  = '../assets/about.png'
const map = '../assets/map.jpg'
import Mapa2 from '../Components/Mapa/Mapa2'
const Contact = () => {

    useEffect(() => {
        window.scrollTo(0, 0); 
    },[] );

    return (
        <Layout>
            <PageHeader style={{background : `url(${aboutImg})`}}>
                <h1>Contact</h1>
            </PageHeader>
            
            <div style={{height : 112}}></div>
            <FormSection className='container'>
                <Adress>
                    <p style={{color:'#008440',fontSize : '16px',lineHeight :'24px'}}>Address</p>
            <div style={{height : 9}}></div>
                    <p>Aleja 29 Listopada 20 <br/>
                        31-401 Kraków<br/>
                        +48 533 315 569<br/>
                        <a style={{color: '#EB7700' ,textDecoration : 'underline'}} href="mailto:info@in-tecenergy.com">info@in-tecenergy.com</a>
                    </p>
                </Adress>
                <ContactForm>
                    <Grid2>
                        <input type="text" name="name" id="name" placeholder="NAME"/>
                        <input type="text" name="surname" id="surname" placeholder="SURNAME"/>
                    </Grid2>
                    <div style={{height : '32px'}}></div>
                    <input type="text" name="email" id="email" placeholder="ADRESS EMAIL"/>
                    <div style={{height : '32px'}}></div>
                    <Grid2>
                        <input type="text" name="country" id="country" placeholder="COUNTRY"/>
                        <input type="text" name="mobile" id="mobile" placeholder="TELEPHONE NUMBER"/>
                    </Grid2>
                    <div style={{height : '32px'}}></div>
                    <textarea placeholder='SEND MESSAGE' name="message" id="message" cols={30} rows={5}></textarea>
                    <div style={{height : '32px'}}></div>
                    <div style={{ display : 'flex',justifyContent:  'center', alignItems : 'center' }}>
                    <Button value='SEND' to='/Contact' arrow /> 
                    </div>
                    <div style={{height : '24px'}}></div>
                    
                    <p style={{marginLeft:'auto',marginRight:'auto',lineHeight :'24px',fontSize: '16px'}}>by submitting this form you agree to our <a style={{color: '#EB7700' ,textDecoration:'underline'}} href="/">privacy policy</a></p>      
                </ContactForm>
            </FormSection>
    <div style={{height : '104px'}}></div>
                    
    <Offices className='container'>
        <Office>
            <h2 style={{color:'#008440'}}>GERMANY</h2>
            <p>
            Frauentorgraben 5 <br/>
        90443 Nürnberg<br/>
        +49 911 2847 88489<br/>
        <a  style={{color:'#EB7700',textDecoration : 'underline'}} href="mailto:info@in-tecenergy.com">info@in-tecenergy.com</a>

            </p>
            <div style={{height : '8px'}}></div>
            
        </Office>
        <Office>
            <h2 style={{color:'#008440'}}>GERMANY</h2>    
            <p>
            Frauentorgraben 5 <br/>
        90443 Nürnberg<br/>
        +49 911 2847 88489<br/>
        <a  style={{color:'#EB7700',textDecoration : 'underline'}} href="mailto:info@in-tecenergy.com">info@in-tecenergy.com</a>

            </p>
            <div style={{height : '8px'}}></div>

        </Office>
        <Office>
            <h2 style={{color:'#008440'}}>GERMANY</h2>
            <p>
            Frauentorgraben 5 <br/>
        90443 Nürnberg<br/>
        +49 911 2847 88489<br/>
        <a  style={{color:'#EB7700',textDecoration : 'underline'}} href="mailto:info@in-tecenergy.com">info@in-tecenergy.com</a>

            </p>
            <div style={{height : '8px'}}></div>
                    
        </Office>
        <Office>
            <h2 style={{color:'#008440'}}>GERMANY</h2>
            <p>
            Frauentorgraben 5 <br/>
        90443 Nürnberg<br/>
        +49 911 2847 88489<br/>
        <a  style={{color:'#EB7700',textDecoration : 'underline'}} href="mailto:info@in-tecenergy.com">info@in-tecenergy.com</a>

            </p>
            <div style={{height : '8px'}}></div>
            </Office>
        <Office>
            <h2 style={{color:'#008440'}}>GERMANY</h2>
            <p>
            Frauentorgraben 5 <br/>
        90443 Nürnberg<br/>
        +49 911 2847 88489<br/>
        <a  style={{color:'#EB7700',textDecoration : 'underline'}} href="mailto:info@in-tecenergy.com">info@in-tecenergy.com</a>

            </p>
            <div style={{height : '8px'}}></div>
            
        </Office>
    </Offices>        

    <Mapa2 bg={true} />
                
    </Layout>
    );
}

export default Contact;


const PageHeader = styled.div`
    color : white;
    
    margin-top : 160px;
    min-height : 355px;
    padding-top : 0px;
    display : flex;
    justify-content : center;
    align-items : center;
    flex-direction : column;
    background-size : contain;
    background-repeat : no-repeat;
    background-position : center;
`;
const FormSection = styled.div`
    display : grid;
    grid-template-columns : 1fr 2fr;
    gap : 32px;  
`;
const Adress = styled.div`
display : flex;
flex-direction : column;
text-transform : uppercase;
font-size : 20px;
line-height :32px;  
`;


const ContactForm = styled.form`
display : flex;
flex-direction : column;
input,textarea{
    padding-left : 40px;
    line-height : 48px;
    border-radius : 50px;
    outline : none;
    border: 1px solid #008440;
    color: #008440;
    box-sizing: border-box;
    border-radius: 32px;
}
input::placeholder , textarea::placeholder{
    
    color: #CCE6D9;
}
textarea{

}
`;

const Grid2 = styled.div`
width : 100%;
line-height : 48px;
display : grid;
grid-template-columns : repeat(2,1fr)  ;

gap : 32px;
color: #008440;
    
`;


const Offices = styled.div`
    display : grid; 
    grid-template-columns : repeat(3,1fr);
    gap :  80px 32px;
    margin-bottom : 100px;
    
`;

const Office = styled.div`
    min-height : 200px;
    h2{
        font-family: Lato;
        font-size: 16px;
        font-style: normal;
font-weight: 400;
line-height: 24px;
letter-spacing: 0px;
text-align: left;

    }   
    p{
        font-size: 20px;
        font-weight: 400;
        line-height: 32px;
    } 
`;
