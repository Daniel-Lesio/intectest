import styled from 'styled-components'


const ContainerComp = styled.div`
    margin-left :auto ;
    margin-right :auto ;
    width : 100%;
    @media (min-width: 640px) {
    max-width : 640px!important;
    }
    @media (min-width: 768px) {
    max-width : 768px!important;
    }
    @media (min-width: 1024px) {
    max-width : 1024px!important;
    }
    @media (min-width: 1280px) {
    max-width : 1280px!important;
    }
    @media (min-width: 1536px) {
    max-width : 1536px!important;
    }
`
const Paragraph = styled.p`
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: left;
`
const Header1 = styled.h1`
    font-size: 48px;
    font-style: normal;
    font-weight: 900;
    line-height: 48px;
    letter-spacing: 0px;
    text-align: left;
`
const Header2 = styled.h2`
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: left;

`



export {  ContainerComp, Paragraph, Header1, Header2  }
