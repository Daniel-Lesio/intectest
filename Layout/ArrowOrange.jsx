import React from 'react';
import styled from 'styled-components';
function ArrowOrangeSvg(props) {
console.log("arrowSvg : " , props.color)
    return (
    <Svg
    hovered={props.hovered}
      width={14}
      height={9}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        className="prefix__xxxx"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.38.477l3.46 3.457a.543.543 0 010 .768L10.38 8.16a.544.544 0 01-.77-.768l2.533-2.53H.543a.544.544 0 110-1.086h11.6L9.61 1.245a.543.543 0 11.77-.768z"
        fill={props.color}
      />
    </Svg>
  )
}

export default ArrowOrangeSvg

const Svg = styled.svg`
    transition : transform ease-in-out .3s;
    transform : translateX(23px) ${props=>props.hovered ? 'scaleX(1.2)':'scaleX(1.0)'};
`;