import { useState } from "react";
import Counter from "./subcomponents/Counter";

function Counters(){

    const [numbers, setNumbers] = useState({num10: 0, num50: 0, num200: 0})

    // ---------------- Counter 10 by 10 ------------- .

    function increase10(num){
        num += 10;
        setNumbers(prevValue => {
            return {...prevValue, num10: num}
        })
    }
    function decrease10(num){
        num -= 10;
        setNumbers(prevValue => {
            return {...prevValue, num10: num}
        })
    }

    // ---------------- Counter 50 by 50 ------------- .

    function increase50(num){
        num += 50;
        setNumbers(prevValue => {
            return {...prevValue, num50: num}
        })
    }
    function decrease50(num){
        num -= 50;
        setNumbers(prevValue => {
            return {...prevValue, num50: num}
        })
    }

    // ---------------- Counter 200 by 200 ------------- .

    function increase200(num){
        num += 200;
        setNumbers(prevValue => {
            return {...prevValue, num200: num}
        })
    }
    function decrease200(num){
        num -= 200;
        setNumbers(prevValue => {
            return {...prevValue, num200: num}
        })
    }

    return (
        <section className="counters-section">
            <Counter increase={increase10} decrease={decrease10} title='Counter 10 by 10' description='This counter counts numbers 10 by 10.' number={numbers.num10} />
            <Counter increase={increase50} decrease={decrease50} title='Counter 50 by 50' description='This counter counts numbers 50 by 50.' number={numbers.num50} />
            <Counter increase={increase200} decrease={decrease200} title='Counter 200 by 200' description='This counter counts numbers 200 by 200.' number={numbers.num200} />
        </section>
    )
}

export default Counters;
