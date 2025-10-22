import styled from "styled-components";
import headshot from "../images/headshot.jpg";

const CaptionWrapper = styled.div`

    display: table;
    @media screen and (max-width: 750px){
        display: block;
        text-align: center;
    }   
`;

const CaptionImage = styled.img`

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

const CaptionP = styled.p`

    color: #FFF0C4;
    display: table-cell;
    vertical-align: top;
    text-align: left;
    font-family: Helvetica, arial, verdana, sans-serif;
    font-size: calc(12px + 0.5vw);
    font-weight: bold;

    @media screen and (max-width: 750px){
        display: block;
        text-align: left;
    }   
`;

const CaptionStrong = styled.strong`
`; 



export default function Caption(){

    return(
        <CaptionWrapper>
            <CaptionImage src={headshot} alt=""/>
            <CaptionP>My name is Zachary and this is my resume. I am an Undergraduate Student at <CaptionStrong>Boston University</CaptionStrong> pursuing a Bachelor of Arts in Computer Science and Economics. 
                    Throughout my academic career, I have developed a strong foundation in <CaptionStrong>Data Modeling</CaptionStrong>, <CaptionStrong>Software Engineering</CaptionStrong>, 
                    <CaptionStrong>Economic Analysis</CaptionStrong>. I have enjoyed applying these skills through my internships and personal projects. I am also involved in multiple 
                    clubs, where I've demonstrated leadership and collaboration skills. I am passionate about using my background in computer science and 
                    economics to obtain goals in <CaptionStrong>data driven decision making</CaptionStrong>.
            </CaptionP>
        </CaptionWrapper>
    )

}