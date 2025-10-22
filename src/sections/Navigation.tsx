
import { Link } from 'react-router-dom';
import styled from "styled-components";

const NavigateWrapper = styled.nav`
    @media screen and (max-width: 750px){
    
        max-width: 100%;
        text-align: center;
        padding: 5px;
    }
`;

const NavigateUl = styled.ul`
    list-style: none;
    margin-top: 15px;
    margin-bottom: 15px;
    padding: 10px 20px;

    @media screen and (max-width: 750px){

        list-style: none;
        margin-top: 5px;
        margin-bottom: 5px;
        padding-left: 0px;
    }
`;

const NavigateLi = styled.li`

    margin-bottom: 25px;
    display: block;
    background-color: #3E0703;
    border-width: 3px;
    border-style: solid;
    border-color: #FFF0C4;
    text-align: center;
    padding: 15px;
    margin-bottom: 50px;

    @media screen and (max-width: 750px){

        display: inline;
        margin: 0px;
        padding: 0px;
    }

`;

//styled link, in order to handle media query since style={} parameter is giving me a hard time
const StyledLink = styled(Link)`

    color: #FFF0C4;
    text-decoration: none;
    font-family:  Helvetica, arial, verdana, sans-serif;
    font-size: 20px;
    font-weight: bold;
    padding: 10px 20px;

    
@media screen and (max-width: 750px){

        display: inline;
        font-size: 12px;
        padding: 11px;
    }
`;

export default function Navigation(){

    return(
        <NavigateWrapper >
            <NavigateUl>
                <NavigateLi>
                    <StyledLink to={"/"}>Home</StyledLink>
                </NavigateLi>
                <NavigateLi>
                    <StyledLink to={"/education"}>Education</StyledLink>
                </NavigateLi>
                <NavigateLi>
                    <StyledLink to={"/experience"}>Experience</StyledLink>
                </NavigateLi>
                <NavigateLi>
                    <StyledLink to={"/projects"}>Projects</StyledLink>
                </NavigateLi>
                <NavigateLi>
                    <StyledLink to={"/skills"}>Skills</StyledLink>
                </NavigateLi>
                <NavigateLi>
                    <StyledLink to={"/leadership"}>Leadership</StyledLink>
                </NavigateLi>
            </NavigateUl>
        </NavigateWrapper >

    )

}