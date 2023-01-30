// Code Correct but not wokring dk why :)  

import React from 'react'

export default function Sqr() {
    const [num, setNum] = useState[0];

    return (
      <> 
      <h1>Find Square</h1>
      <input type="text" placeholder="Enter Number" onChange={event => setNum(event.target.value)}/>
          <h1>Square of {num} is : {num*num}</h1>
      </>
    )
}