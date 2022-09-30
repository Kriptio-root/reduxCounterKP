import React from "react";
import '../../scss/commonStyles.scss';
import './scss/functional-counter.scss';


const  FunctionalCounter = ({count}) => {
    const [counterValue, setCounterValue] = React.useState(count);

    const funcIncrease = () => {
        setCounterValue(counterValue => counterValue + 1);
    }

    const funcDecrease  = () => {
        setCounterValue(counterValue => counterValue - 1);
    }

    const funcReset  = () => {
        setCounterValue(count);
    }

    return (
        <div className="counter--wrapper">
            <h2 className="counter__header">Im am functional counter</h2>
            <div className="counter">{counterValue}
            </div>
            <div className="controls">
                <button className='controls__button controls__button--func funcCounter__inc' onClick={funcIncrease}>INC</button>
                <button className='controls__button controls__button--func funcCounter__dec'onClick={funcDecrease} >DEC</button>
                <button className='controls__button  controls__button--func funcCounter__reset' onClick={funcReset}>RESET</button>
            </div>
        </div>
    );
}
export default FunctionalCounter;
