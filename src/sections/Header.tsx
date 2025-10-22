// import React from "react";
import styled from 'styled-components';


const HeaderWrapper = styled.header`

    background-color: #3e0703;
    text-align: left;

    @media screen and (max-width: 750px2){
        text-align: center;
    }
`;

const Title = styled.h1`
    color: #FFF0C4;
    font-family:  Helvetica, arial, verdana, sans-serif;
    font-weight: bold;
    padding: 3px;
    margin-left: 10px;
`;

const Subtext = styled.p`
    color: #FFF0C4;
    font-family:  Helvetica, arial, verdana, sans-serif;
    font-weight: bold;
    padding: 5px;
    margin-left: 10px;
`;

export default function Header(){

    return(
        <HeaderWrapper>
            <Title>Zach Memoli's Online Resume</Title>
            <Subtext>An Online Exhibit</Subtext>
        </HeaderWrapper>
    )
}