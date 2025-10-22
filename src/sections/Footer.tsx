// import React from "react";
import styled from 'styled-components';


const FooterWrapper = styled.header`

    background-color: #3e0703;
    text-align: left;
`;


const Notes = styled.p`
    color: #FFF0C4;
    text-align: center;
`;

const Symbol = styled.a`
    color: #FFF0C4;
`;

export default function Footer(){

    return(
        <FooterWrapper>
            <Notes>All Rights Reserved<Symbol>Credits</Symbol>&copy;</Notes>
        </FooterWrapper>
    )
}