import styled from "styled-components";
import vandyk1 from "../images/vandyk1.jpg";
import dublin from "../images/dublin.jpg";


const ImgCenWrapper = styled.div`

    text-align: center; 
`;


const VanDyk1 = styled.img`
    width: 25vw;      
    max-width: 350px;  
    min-width: 300px;  
    height: auto;      
    margin-top: 30px;
    margin-left: 5vh;
    margin-right: 5vh;
    border-width: 10px;
    border-style: solid;
    border-color: #FFF0C4;

    @media screen and (max-width: 750px){

        width: 25vw;       
        max-width: 350px;  
        min-width: 300px;  
        height: auto;      
        display: block;  
        margin: auto;    
        margin-top: 8px;
        margin-bottom: 8px;
         border-width: 10px;
        border-style: solid;
        border-color: #FFF0C4;
    }
`;

const Dublin = styled.img`

    width: 25vw;      
    max-width: 300px;  
    min-width: 400px;  
    height: auto;      
    margin-top: 30px;
    margin-left: 5vh;
    margin-right: 5vh;
    border-width: 10px;
    border-style: solid;
    border-color: #FFF0C4;

    @media screen and (max-width: 750px){

        width: 25vw;       
        max-width: 300px;  
        min-width: 400px;  
        height: auto;      
        display: block;  
        margin: auto;    
        margin-top: 8px;
        margin-bottom: 8px;
        border-width: 10px;
        border-style: solid;
        border-color: #FFF0C4;
    }
`;


export default function Caption(){

    return(
        <ImgCenWrapper>
            
            <VanDyk1 src={vandyk1} alt=""/>
            <Dublin src={dublin} alt=""/>
        </ImgCenWrapper>
    )

}