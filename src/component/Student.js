import React from 'react'

export default function Student(props) {

    const {name, age, roll_no, city} = props.data;

  return (
    <>
        { /*
        <h1> {props.data.name} </h1>
        <h1> {props.data.age} </h1>
        <h1> {props.data.roll_no} </h1>
        <h1> {props.data.city} </h1>  */ }

        <h3>Name : {name} </h3>
        <h3>Age : {age} </h3>
        <h3>Roll Number : {roll_no} </h3>
        <h3>City : {city} </h3>

    </>
  )
}

