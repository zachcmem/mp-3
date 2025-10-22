import { useState, useCallback } from "react";

export function useCalc(){

    //state variables
    const [num1,setNum1] = useState("");
    const [num2,setNum2] = useState("");
    const [output, setOutput] = useState(Number);

    //when button is click
    const buttonClick = useCallback((button: string) => {

        //convert to numbers
        const number1 = Number(num1);
        const number2 = Number(num2);

        //find operation
        if (button == "add"){
            setOutput(number1 + number2);
        }
        else if (button == "sub"){
            setOutput(number1 - number2);
        }
        else if (button == "mul"){
            setOutput(number1 * number2);
        }
        else if (button == "div"){
            setOutput(number1 / number2);
        }
        else if (button == "exp"){
            setOutput(number1 ** number2);
        }

    }, [num1, num2]);

    const clear = useCallback(()=> {
        setNum1("");
        setNum2("");
        setOutput(0); 

    }, []);

    //parameterized return that sends components/consts to 
    // Calculator.tsx component
    return {num1, num2, output, clear, buttonClick, setNum1, setNum2} //TEST SETNUM1 AND SETNUM 2 WORK LIKE THIS 
}