import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset, incrementByAmount } from './counterSlice'
import './Counter.css'


function Counter() {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    const [innerCount, setInnerCount] = useState(0);
    const [incrementAmount, setIncrementAmount] = useState(0);
    const addValue = Number(incrementAmount) || 0;

    const  _onDecrement = () => {
        setInnerCount(innerCount - 1)
    }
    const _onIncrement = () => {
        setInnerCount(innerCount + 1)
    }


  return (
    <div className='Counter'>
    <section>
        Counter: {count}
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(reset())}>R</button>
        <div>
          incrementAmount: {incrementAmount}
          <input type="text" value={incrementAmount} onChange={(e) => setIncrementAmount(e.target.value)} />
          <button onClick={() => dispatch(incrementByAmount(addValue))}>+ by value</button>
        </div>
    </section>
        <section>
            Inner Counter: {innerCount}
            <button onClick={() => _onIncrement()}>+</button>
            <button onClick={() => _onDecrement()}>-</button>
        </section>
    </div>
  )
}

export default Counter