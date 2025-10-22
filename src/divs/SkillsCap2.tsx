import styled from "styled-components";
import computer from "../images/computer.jpg";


const CaptionWrapper = styled.div`

    display: flex;
    margin-bottom: 20px;
    font-family: Helvetica, arial, verdana, sans-serif;

    @media screen and (max-width: 750px){
        display: block;
        text-align: center;
    }
`;

const CaptionImage = styled.img`

    border-width: 10px;
    border-style: solid;
    border-color: #FFF0C4;
    vertical-align: top;
    width: 30vw;   
    height: auto; 
    max-width: 5000px;  
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

const CaptionUl = styled.ul`

    list-style-type: none;    
    font-family: Helvetica, arial, verdana, sans-serif;
    margin-top: 10px;
`;

const CaptionLi = styled.li`

    font-family: Helvetica, arial, verdana, sans-serif;
    text-align: center;
    color: #FFF0C4;
    font-family: Helvetica, arial, verdana, sans-serif;
    font-size: calc(12px + 0.5vw);
    margin-bottom: 20px;
`;


export default function SkillsCap2(){

    return(
        <CaptionWrapper>
            <CaptionImage src={computer} alt=""/>
            <CaptionUl>
                <CaptionLi>Microsoft Suite (Expert)</CaptionLi>
                <CaptionLi>Microsoft Suite (Expert)</CaptionLi>
                <CaptionLi>Adobe Creative Cloud (Expert)</CaptionLi>
                <CaptionLi>Google Analytics (Expert)</CaptionLi>
                <CaptionLi>Social Media Platforms (Expert)</CaptionLi>
                <CaptionLi>Italian (Beginner)</CaptionLi>
            </CaptionUl>
        </CaptionWrapper>
    )

}