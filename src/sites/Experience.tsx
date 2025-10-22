
import styled from "styled-components";
import ExpCaption1 from "../divs/ExpCaption1";
import ExpCaption2 from "../divs/ExpCaption2";

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


    @media screen and (max-width: 750px){
        text-align: center;
    }
`;



export default function Experience(){

    return(
        <>
            <MainHeader>Experience</MainHeader>
            <MainBreak/>
            <MainTitle>Van Dyk Recycling Solutions</MainTitle>
            <MainSubtitle>After Sales Equipment Engineer Data Engineer - Summer 2024 to Summer 2025</MainSubtitle>
            <ExpCaption1/>
            <MainBreak/>
            <MainBreak/>
            <MainBreak/>
            <MainTitle>Sign Smarts Visual Communications</MainTitle>
            <MainSubtitle>Visual Communications Specialist / Department Manager</MainSubtitle>
            <ExpCaption2/>
            <MainBreak/>
            <MainBreak/>
            <MainBreak/>
            <MainBreak/>
            <MainBreak/>
            <MainBreak/>
            <MainBreak/>
            <MainBreak/>
            
       

        </>

    )

}
