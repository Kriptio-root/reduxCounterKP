import React from 'react';
import '../../scss/commonStyles.scss';
import './scss/class-counter.scss';

    class ClassCounter extends React.Component {
        constructor(props){
            super(props);
            this.state={
                count:this.props.count
            }
        }

        countIncrease = () => {

            this.setState(state => ({
                count:this.state.count +1
            }))

        }

        countDecrease = () => {

            this.setState(state => ({
                count:this.state.count -1
            }))

        }

        resetCounter = () => {
            this.setState( {
                count: this.props.count
            })
        }

        render() {
            return(
                <div className="counter--wrapper">
                    <h2 className="counter__header">Im am class counter</h2>
                    <div className="counter">{this.state.count}</div>
                    <div className="controls">
                        <button className='controls__button controls__button--class classCounter__inc' onClick={this.countIncrease}>INC</button>
                        <button className='controls__button controls__button--class classCounter__dec' onClick={this.countDecrease}>DEC</button>
                        <button className='controls__button  controls__button--class classCounter__reset' onClick={this.resetCounter}>RESET</button>
                    </div>
                </div>
            )
        }
    }
export default ClassCounter;