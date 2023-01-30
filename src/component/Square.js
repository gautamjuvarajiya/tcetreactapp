import React, { useState } from 'react'

export default function Square() {
    //const [num, setNum] = useState(0);
    //const [num1, setNum1] = useState(5);
    const [num1, setNum1] = useState(0);

    return (
      <> 
      <h1>Find Square</h1>
      <input type="text" placeholder="Enter Number" onChange={event => setNum1(event.target.value)}/>
          <h1>Square of {num1} is : {num1*num1}</h1>
      </>
    )
}
