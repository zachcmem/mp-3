import styled from "styled-components";
import vandyk2 from "../images/vandyk2.JPG";


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
    width: 35vw;   
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

export default function ExpCaption1(){

    return(
        <CaptionWrapper>
            <CaptionImage src={vandyk2} alt=""/>
            <CaptionP>Whether you’re designing a new system or looking for retrofit options to improve your operation, Van Dyk is committed to finding a solution that fits 
                        your needs and goals. As an After Sales Equipment Engineer Data Engineer, I applied software engineering with data analytics skills in order to provide 
                        industry standard data representation for project managers and services techs. Working alongside industry professionals I was able to learn relevant technical 
                        skills that will help me in my carrer</CaptionP>
            
        </CaptionWrapper>
    )

}
