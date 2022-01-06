import React, { Fragment, useState }  from 'react'
import PropTypes from 'prop-types';
import './index.css'

const CounterAPP = ({ value }) => {

    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(count + 1); 
        // setCount( (count) => count + 1)
    };
    const handleDecrement = () => setCount(count - 1);
    const handleReset = () => setCount(value);

    return ( 
        <Fragment>
            <h1>Counter APP</h1>
            <h2>{ count}</h2>

            <button className='button' onClick={ handleIncrement }>Increment value</button>
            <button className='button' onClick={ handleDecrement }>Decrement value</button>
            <button className='button' onClick={ handleReset }>Reset</button>
        </Fragment>
     );
}
 
CounterAPP.propTypes = {
    value: PropTypes.number
};

export default CounterAPP;