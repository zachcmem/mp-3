import styled from "styled-components";
import splash from "../images/splash.jpg";


const CaptionWrapper = styled.div`

    display: table;
     margin-top: 25px;


    @media screen and (max-width: 750px){
        display: block;
        text-align: center;
    }
`;

const CaptionP = styled.p`

    color: #FFF0C4;
    display: table-cell;
    vertical-align: top;
    text-align: left;
    font-family: Helvetica, arial, verdana, sans-serif;
    font-size: calc(12px + 0.5vw);

    @media screen and (max-width: 750px){
        display: block;
        text-align: left;
        margin-bottom: 10px;
    }
`;

const CaptionImage = styled.img`

    border-width: 10px;
    border-style: solid;
    border-color: #FFF0C4;
    display: table-cell;
    vertical-align: top;
    width: 30vw;   
    height: auto; 
    max-width: 240px;  
    min-width: 150px;  
    margin-left: 40px;
    margin-right: 40px;

    @media screen and (max-width: 750px){
        display: block;
        margin: 0 auto 15px auto;
        width: 50vw;  
        height: auto;
    }
`;

export default function LeadCap2(){

    return(
        <CaptionWrapper>
            <CaptionP>As Social Chair of the Terrier Ride Engineering Club, I organize events and activities that bring our members together outside of projects. 
                        My role focuses on building a strong community where students can connect, collaborate, and share their passion for themed entertainment. From 
                        planning socials to helping coordinate guest speaker events, I work to make sure everyone feels engaged and included.</CaptionP>
            <CaptionImage src={splash} alt=""/>
        </CaptionWrapper>
    )

}