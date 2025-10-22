import styled from "styled-components";
import boston1 from "../images/boston1.png";


const CaptionWrapper = styled.div`

    display: table;

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
    width: 25vw;   
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

const CaptionStrong = styled.strong`

`;




export default function EduCaption1(){

    return(
        <CaptionWrapper>
            <CaptionP>Boston University is a leading  <CaptionStrong>private research institution</CaptionStrong> with two primary campuses in the heart of Boston and programs around the world.
                     Relevant coursework includes Computational Systems, Software Engineering, Web Development, Data Structures and Algoritms, Calculus I and II, Statistics I and II, 
                     Econometrics, and Legal Analysis of Economic Issues.<CaptionStrong> Extraciriculars</CaptionStrong> include Terrier Ride Engineering Club, Hack Hardware Club, and BU Astronomical Society</CaptionP>
            <CaptionImage src={boston1} alt=""/>
        </CaptionWrapper>
    )

}