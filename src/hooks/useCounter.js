import { useState } from 'react'


export const useCounter = ( initialState='20') => {
    
    
    const [counter, setCounter] = useState(initialState);

    const reset = () => {
        setCounter( initialState )
    }

    const increment = () => {
        setCounter( counter + 5 )
    }

    const decrement = () => {
        counter <=5 ? console.log('limit exceded') : setCounter( counter - 5 )
        
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }

}
