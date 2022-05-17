import { useState } from "react";
import Counter from "./subcomponents/Counter";

function Counters(){

    const [numbers, setNumbers] = useState({num10: 0}, {num50: 0}, {num200: 0})

    function increase10(num){}
    function decrease10(num){}

    return (
        <section className="counters-section">
            <Counter increase10={increase10} decrease10={decrease10} title='Counter 10 by 10' description='This counter counts numbers 10 by 10.' number={numbers.num10} />
        </section>
    )
}

export default Counters;
