import React from 'react';
import styled from 'styled-components'
import {motion} from 'framer-motion'
import Link from 'next/link'
const Position = ({position}) => {
    return (
        <PositionComp>
            <h3 style={{fontWeight : 400}}>{position.position}</h3>
            
            <p style={{fontWeight : 400 ,textAlign:'center', color : '#008440'}} >{position.city}</p>
            
            <Link href='/Job'>
            <a>
            <More>
                <p>MORE</p>
                <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.3795 0.477212L13.8407 3.93403C14.0531 4.14615 14.0531 4.49008 13.8407 4.70221L10.3794 8.15902C10.1671 8.37115 9.82268 8.37115 9.61028 8.15902C9.39788 7.94689 9.39788 7.60297 9.61028 7.39084L12.1431 4.8613L0.543882 4.8613C0.243504 4.8613 -3.62481e-07 4.61811 -3.37193e-07 4.31812V4.31812C-3.11904e-07 4.01812 0.243505 3.77493 0.543883 3.77493L12.1431 3.77493L9.61028 1.24539C9.39789 1.03327 9.39789 0.689339 9.61028 0.477212C9.82268 0.265084 10.1671 0.265084 10.3795 0.477212Z" fill="#EB7700"/>
                </svg>

            </More>
            </a>
            </Link>
            </PositionComp>
    );
}

export default Position;

const PositionComp = styled(motion.div)`
        line-height : 82px;
        border-bottom : solid 1px #CCE6D9;
        display : grid;
        grid-template-columns :  2fr 1fr 1fr;
        p{
            display : flex;
            justify-content : center;
        }
`;

const More = styled.div`
    cursor: pointer;
    display :flex;
    align-items : center;
    justify-content : flex-end;
    color : #EB7700;
    font-weight : 400;
    padding-right : 25px;
    svg{
        margin-left : 8px;
    }

`;