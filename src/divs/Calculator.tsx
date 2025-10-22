import styled from "styled-components";
import { useCalc } from "../hooks/useCalc";


const CalcWrapper = styled.div`
`;

const CalcBreak = styled.br`
`;

const CalcButton = styled.button`
    color: #3E0703;
    background-color: #FFF0C4;
    border-color: #3E0703;
    border-radius: 50%;
    height: 16vw;
    width: 16vw;
    font-size: 3vw;
    max-height: 130vh
`;

const CalcH1 = styled.h1`
    color: #FFF0C4;
    text-align: center;
    font-family:  Helvetica, arial, verdana, sans-serif;
    font-size: calc(100px + 0.5vw);
    font-weight: bold;
`;

const CalcOutput = styled.h2`
    color: #FFF0C4;
    text-align: center;
    font-family:  Helvetica, arial, verdana, sans-serif;
    font-size: calc(200px + 0.5vw);
    font-weight: bold;
`;

const CalcLabel = styled.label`
    color: #FFF0C4;
    text-align: center;
    font-family:  Helvetica, arial, verdana, sans-serif;
    font-size: calc(16px + 0.5vw);
    font-weight: bold;
`;

const CalcInput = styled.input`
`

export default function Calculator(){

    //passed from useCalc use state
    const {num1, num2, output, clear, setNum1, buttonClick ,setNum2} = useCalc()

    return(
        <CalcWrapper>
            <CalcLabel>Give me a number:</CalcLabel>
            <CalcInput value={num1} onChange={(e) => setNum1(e.target.value)} />
            <CalcBreak/>
            <CalcLabel>Give me a number:</CalcLabel>
            <CalcInput value={num2} onChange={(e) => setNum2(e.target.value)} />
            <CalcBreak/>
            <CalcButton onClick={()=>buttonClick("add")}>Add</CalcButton>
            <CalcButton onClick={()=>buttonClick("sub")}>Subract</CalcButton>
            <CalcButton onClick={()=>buttonClick("mul")}>Multiply</CalcButton>
            <CalcButton onClick={()=>buttonClick("div")}>Divide</CalcButton>
            <CalcButton onClick={()=>buttonClick("exp")}>Exponent</CalcButton>
            <CalcButton onClick={clear}>Clear</CalcButton>
            <CalcBreak/>
            <CalcH1>MEMOLI</CalcH1>
            <CalcBreak/>
            <CalcOutput>{output}</CalcOutput>
        </CalcWrapper>
    )
}
