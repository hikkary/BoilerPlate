import React, { useState, useEffect } from 'react'

const HookCounters = () => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0)
  const [fakeState, setFakeState] = useState({
    coco: null,
    channel: null
  })

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`
  })

  console.log(fakeState)
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button
        onClick={() =>
          setFakeState({
            ...fakeState,
            channel: 1
          })
        }
      >
        state
      </button>
    </div>
  )
}

export default HookCounters
