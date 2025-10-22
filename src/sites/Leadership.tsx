import styled from "styled-components";
import LeadCap1 from "../divs/LeadCap1";
import LeadCap2 from "../divs/LeadCap2";

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



export default function Leadership(){

    return(
        <>
            <MainHeader>Leadership</MainHeader>
            <MainBreak/>
            <MainTitle>Data / Software Engineer Project Leader</MainTitle>
            <MainSubtitle>Van Dyk Recycling Solutions</MainSubtitle>
            <LeadCap1/>
            <MainBreak/>
            <MainTitle>Social Outreach Chair</MainTitle>
            <MainSubtitle>Terrier Ride Engineering Club (TREC)</MainSubtitle>
            <LeadCap2/>
            <MainBreak/>
        </>

    )

}