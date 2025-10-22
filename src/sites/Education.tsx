
import styled from "styled-components";
import EduCaption1 from "../divs/EduCaption1";
import EduCaption2 from "../divs/EduCaption2";

const MainBreak = styled.br`
    
`;

const MainHeader = styled.h3`

    color: #FFF0C4;
    font-family:  Helvetica, arial, verdana, sans-serif;
    font-size: 20px;
    font-weight: bold;
    text-align: center;




`;

const MainTitle = styled.h3`

    color: #FFF0C4;
    font-family:  Helvetica, arial, verdana, sans-serif;
    font-size: calc(20px + 0.5vw);;
    font-weight: bold;
    text-align: left;
    margin-bottom: 15px;

    @media screen and (max-width: 750px){

        text-align: center;

    }
`;

const MainSubtitle = styled.p`
    color: #FFF0C4;
    text-align: left;
    font-family:  Helvetica, arial, verdana, sans-serif;
    font-size: calc(16px + 0.5vw);
    font-weight: bold;
    margin-bottom: 15px;

    @media screen and (max-width: 750px){
        text-align: center;
    }
`;

const MainStrong = styled.strong`
`;

export default function Education(){

    return(
        <>
            <MainHeader><MainStrong>Education</MainStrong></MainHeader>
            <MainBreak/>
            <MainTitle>Boston University</MainTitle>
            <MainSubtitle>Bachelor of Arts in Computer Science and Economics</MainSubtitle>
            <EduCaption1/>
            <MainBreak/>
            <MainTitle>Norwalk High School</MainTitle>
            <MainSubtitle>Cumulative GPA: 4.25</MainSubtitle>
            <EduCaption2/>
            <MainBreak/>
        </>

    )

}