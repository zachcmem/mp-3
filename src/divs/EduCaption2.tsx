import styled from "styled-components";
import nhs from "../images/nhs.png";


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






export default function EduCaption2(){

    return(
        <CaptionWrapper>
            <CaptionImage src={nhs} alt=""/>
            <CaptionP> A community of students, teachers, administrators and families, NHS embraces its diversity and encourages intellectual curiosity.
                     Extraciriculars. include Bears Reaching Out Within Norwalk (brown), BuildON, Digital Media and Communications Academy, Men's Volleyball Team.</CaptionP>
        </CaptionWrapper>
    )

}