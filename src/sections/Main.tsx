import type { PropsWithChildren } from "react"; 
import styled from 'styled-components';


const MainWrapper = styled.main`
 
    background-color: #660B05;    
    padding: 10px;

    @media screen and (max-width: 750px){
        width: 100%;
    }
    
`;


// Main must take on all the websites and should have children
export default function Main({ children} : PropsWithChildren){

    return(
        <MainWrapper> { children } </MainWrapper>
    )
}