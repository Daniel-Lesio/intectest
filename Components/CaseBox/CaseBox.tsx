import React from 'react';
import styled from 'styled-components';
import { Header1 } from '../../styledComponents/styledComponents';
// import icon1 from '../../assets/ico/cases/doc-healthy.svg';
// import icon2 from '../../assets/ico/cases/bulldozer.svg';
// import icon3 from '../../assets/ico/cases/cable.svg';
// i'/assets/ico/cases/worker.svg'from '../../assets/ico/cases/worker.svg';
// import'/assets/ico/cases/intaler.svg'from '../../assets/ico/cases/intaler.svg';
const CaseBox = ( props ) => {
    
    return (
        <div>
            <Section>
                <div className="container">
                <Indicator>
                    <Ind>
                        <Circle>
                            <img src='/assets/ico/cases/doc-healthy.svg' alt=""/>
                        </Circle>
                        <h4 style={{ fontWeight : 900,textTransform : 'uppercase',fontSize : '7px', marginTop : '8px'}}>Documents</h4>
                    </Ind>
                    <Ind>
                        <Circle>
                            <img src='/assets/ico/cases/bulldozer.svg' alt=""/>
                        </Circle>
                        <h4 style={{ fontWeight : 900,textTransform : 'uppercase',fontSize : '7px', marginTop : '8px'}}>SITE PREPARATION</h4>
                    </Ind>
                    <Ind>
                        <Circle>
                            <img src='/assets/ico/cases/cable.svg' alt=""/>
                        </Circle>
                        <h4 style={{ fontWeight : 900,textTransform : 'uppercase',fontSize : '7px', marginTop : '8px'}}>CABLING & MODULE <br/> INSTALLATION</h4>
                    </Ind>
                    <Ind>
                        <Circle>
                            <div className="overlay"></div>
                            <img src='/assets/ico/cases/worker.svg' alt=""/>
                        </Circle>
                        <h4 style={{ opacity : 0.7, fontWeight : 900,textTransform : 'uppercase',fontSize : '7px', marginTop : '8px'}}>OTHER WORKS</h4>
                    </Ind>
                    <Ind>
                        <Circle>
                            <div className="overlay"></div>
                            <img src='/assets/ico/cases/intaler.svg' alt=""/>
                        </Circle>
                        <h4 style={{ opacity : 0.7, fontWeight : 900,textTransform : 'uppercase',fontSize : '7px', marginTop : '8px'}}>POWER   CONNECTION</h4>
                    </Ind>
                    
                </Indicator>
                <Left>
                    <Header1 style={{fontSize : '26px',fontWeight : 700,lineHeight : '32px'}} >{props.case.name}</Header1>
                    <div style={{height : '12px'}} ></div>
                    <div style={{ textTransform : 'uppercase',lineHeight : '28px'}}><span style={{marginRight : '8px' ,fontWeight : 900 ,}}>Employer :</span>  { props.case.employer } </div>                    
                    <div style={{ textTransform : 'uppercase',lineHeight : '28px'}}><span style={{marginRight : '8px' ,fontWeight : 900}}>CAPACITY :</span>  { props.case.capacity } </div>                    
                    <div style={{ textTransform : 'uppercase',lineHeight : '28px'}}><span style={{marginRight : '8px' ,fontWeight : 900}}>Location :</span>  { props.case.location } </div>                    
                    <div style={{ textTransform : 'uppercase',lineHeight : '28px'}}><span style={{marginRight : '8px' ,fontWeight : 900}}>Date :</span>  { props.case.date } </div>                    
                    <More>
     <p style={{marginRight : '8px'}}>More</p>
     <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path fillRule="evenodd" clipRule="evenodd" d="M11.009 0.477212L14.4703 3.93403C14.6827 4.14615 14.6827 4.49008 14.4703 4.70221L11.009 8.15902C10.7966 8.37115 10.4523 8.37115 10.2399 8.15902C10.0275 7.94689 10.0275 7.60297 10.2399 7.39084L12.7726 4.8613L1.17346 4.8613C0.873082 4.8613 0.629578 4.61811 0.629578 4.31811C0.629578 4.01812 0.873083 3.77493 1.17346 3.77493L12.7726 3.77493L10.2399 1.24539C10.0275 1.03327 10.0275 0.689339 10.2399 0.477212C10.4523 0.265084 10.7966 0.265084 11.009 0.477212Z" fill="#EB7700"/>
     </svg>  
   </More>
                </Left>
                <Right>
                    <img src={props.case.imgUrl} alt=""/>
                </Right>
                </div>
            </Section>
        </div>
    );
}

export default CaseBox;
const Section = styled.section`
    
    margin-bottom : 300px;
    .container{
        min-height : 512px;
        height : 100%;
        position: relative;
    display : grid ;
    grid-template-columns : 1fr 2fr;
    }
`;
const Left = styled.div`
    display : flex;
    flex-direction :column;
    align-items : flex-start;
    justify-content  :center;
    height : 100%;
`;
const Right = styled.div`
    position: relative;
    
    img{
        border-radius: 40px 0px 0px 0px;
        position : absolute;
        left : 0px;
        top : 0px;
        width : 992px;
        height : 512px;
        object-fit : cover;
    }
`;
const Indicator = styled.div`
    position : absolute;
    bottom : 0px;
    background: #CCE6D9;
    border-radius: 40px 40px 0px 40px;
    width : 100%;
    max-width : 664px;
    height : 104px;
    z-index :1;
    display : flex;
    align-items : center;
    justify-content : space-between;
    padding-left : 48px;
    padding-right : 48px;
`;
const Ind = styled.div`
    display :flex;
    flex-direction : column;
    justify-content : center;
    align-items: center;
    font-weight: 500;
    font-size: 7px;
    line-height: 10px;
    text-align : center;
    color : green;
`;
const Circle = styled.div`
    border-radius :50%;
    width : 48px;
    height : 48px;
    display : flex;
    justify-content : center;
    align-items : center;
    background : white;
    position: relative;
    cursor: pointer;
    .overlay{
    cursor : not-allowed ;
    position : absolute;
    width : 100%;
    height :100%;
    background : #CCE6D9;
    opacity : .7;
    }
`;

const More = styled.div`
display: flex;
align-items:  center;
justify-content: space-between;
color: #EB7700;
line-height: 24px;
margin-top    : 24px ;
text-transform: uppercase;
cursor: pointer;
&:hover{
    color : #ddd;
    p{margin-right : 10px}
    path{
        fill : #ddd;

    }
}
`;