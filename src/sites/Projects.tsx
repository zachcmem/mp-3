import styled from "styled-components";
import Calculator from "../divs/Calculator";

const MainWrapper = styled.div`
    min-height: 100vh;
`;

const MainBreak = styled.br`
`;

const MainH3 = styled.h3`
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
    text-align: center;
    font-family:  Helvetica, arial, verdana, sans-serif;
    font-size: calc(16px + 0.5vw);
    font-weight: bold;
    margin-bottom: 15px;

    @media screen and (max-width: 750px){
        text-align: center;
    }
`;


export default function Project(){
    return(
        <MainWrapper>
            <MainH3>Projects</MainH3>
            <MainBreak/>
            <MainTitle>CALCULATOR</MainTitle>
            <MainSubtitle>Create My Jersey Number! (Jersey numbers cant be negative!)</MainSubtitle>
            <Calculator/>
        </MainWrapper>
    )
}
