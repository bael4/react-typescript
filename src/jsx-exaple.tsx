import React,{createElement as e, useState} from 'react'

export default function App() {

const [count,setCount]=useState(0)

  return e('div',{className:'container'},[
    e('h1',{className:'font-bold', key:1},`${count}`),
    e('button',
    {className:'py-2 px-4 border', 
    onClick: ()=> setCount(count+1),
    key:2},
    'Click me')
  ])
    
  
}