import styled from "styled-components";
import Caption from "../divs/Caption";
import ImgCen from "../divs/ImgCen";



const MainHeader = styled.h3` 
    color: #FFF0C4;
    font-family:  Helvetica, arial, verdana, sans-serif;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
`;

const MainBreak = styled.br`

`;

const MainP = styled.p` 

    color: #FFF0C4;
    text-align: left;
    font-family:  Helvetica, arial, verdana, sans-serif;
    font-size: calc(12px + 0.5vw);
    font-weight: bold;
`;



export default function Home(){

    return(
        <>
            <MainHeader>HOME</MainHeader>
            <MainBreak/>
            <Caption/>
            <MainBreak/>
            <MainP>Welcome to my website! Here you will find my prior education and experience, as well as my personal projects. My skills and achievements are also listed! Thank you for your time!</MainP>
            <ImgCen/>
            <MainBreak/>
            <MainBreak/>
            <MainBreak/>
            <MainBreak/>
            <MainBreak/>
            <MainBreak/>
        </>

    )

}
