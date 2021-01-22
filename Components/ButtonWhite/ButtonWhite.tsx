import React from 'react';
import styled from 'styled-components'
const ButtonWhite = ({children}) => {
    return (
        <ButttonComp>        
            {children}
        </ButttonComp>
    );
}

export default ButtonWhite;


const ButttonComp = styled.div`
    background :#fff;
    color : #008440;
    display : flex;
    justify-content : space-between;
    align-items : center;
    padding : 16px 25px;
    border-radius : 50px;
    max-width : 100%;
    font-family: Avenir;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0px;
    text-align: center;
    cursor : pointer;
`