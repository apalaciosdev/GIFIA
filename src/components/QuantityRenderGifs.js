import React, {useEffect} from 'react'
import { useCounter } from '../hooks/useCounter'
import '../assets/css/QuantityRenderGifs.css'

const QuantityRenderGifs = ({setQuantity}) => {

  const { counter, increment, decrement} = useCounter(20)
  
  useEffect(() => {
    setQuantity(counter)
  },[counter])
  
  


  return (
    <div className="counter">
      <button onClick={decrement}>-</button>  
      <p>{counter}</p>   
      <button onClick={increment}>+</button>
    
    </div>
  
  )

  
}

export default QuantityRenderGifs
