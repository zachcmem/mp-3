import styled from "styled-components";
import SkillsCap1 from "../divs/SkillsCap1";
import SkillsCap2 from "../divs/SkillsCap2";

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




export default function Skills(){
    return(
        <>
            <MainHeader>Skills</MainHeader>
            <MainBreak/>
            <MainTitle>Programming Languages</MainTitle>
            <SkillsCap1/>
            <MainTitle>Techincal Skills</MainTitle>
            <SkillsCap2/>
            <MainBreak/>
        </>
    )
}