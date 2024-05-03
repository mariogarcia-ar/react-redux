import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './counterSlice'
import './Counter.css'


function Counter() {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    const [innerCount, setInnerCount] = useState(0);


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