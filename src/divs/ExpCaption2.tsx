import styled from "styled-components";
import signsmarts from "../images/signsmarts.jpg";


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

export default function ExpCaption2(){

    return(
        <CaptionWrapper>
            <CaptionP>Learned software programs and hardware to utilize graphic design and retail ability for quality work
                        requested. Managed company financials, Assisted in maintaining inventory, organization, and processing orders/transactions</CaptionP>
            <CaptionImage src={signsmarts} alt=""/>
        </CaptionWrapper>
    )

}