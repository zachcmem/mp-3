import styled from "styled-components";


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


export default function ExpCaption1(){

    return(
        <CaptionWrapper>
            <CaptionP>Whether you’re designing a new system or looking for retrofit options to improve your operation, Van Dyk is committed to finding a solution that fits 
                        your needs and goals. As an After Sales Equipment Engineer Data Engineer, I applied software engineering with data analytics skills in order to provide 
                        industry standard data representation for project managers and services techs. Working alongside industry professionals I was able to learn relevant technical 
                        skills that will help me in my carrer</CaptionP>
            
        </CaptionWrapper>
    )

}
