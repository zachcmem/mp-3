import styled from "styled-components";
import programming from "../images/programming.jpg";


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


export default function SkillsCap1(){

    return(
        <CaptionWrapper>
            <CaptionImage src={programming} alt=""/>
            <CaptionUl>
                <CaptionLi>Python (Intermediate)</CaptionLi>
                <CaptionLi>Java (Intermediate)</CaptionLi>
                <CaptionLi>SQL (Intermediate)</CaptionLi>
                <CaptionLi>HTML (Intermediate)</CaptionLi>
                <CaptionLi>CSS (Beginner)</CaptionLi>
                <CaptionLi>JavaScript (Beginner)</CaptionLi>
                <CaptionLi>C (Beginner)</CaptionLi>
            </CaptionUl>
        </CaptionWrapper>
    )

}