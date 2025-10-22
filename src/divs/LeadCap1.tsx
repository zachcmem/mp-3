import styled from "styled-components";
import eboard from "../images/eboard.jpg";


const CaptionWrapper = styled.div`

    display: table;
    margin-bottom: 20px;


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
    width: 70vw;   
    height: auto + 50px; 
    max-width: 300px;  
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

export default function LeadCap1(){

    return(
        <CaptionWrapper>
            <CaptionP>Leader a team of fellow interns at Van Dyk Recycling Solutions in order to build a custom software for employee use. Helped organized 
                        meetings and task for developement teams and presented the project to company executives</CaptionP>
            <CaptionImage src={eboard} alt=""/>
        </CaptionWrapper>
    )

}