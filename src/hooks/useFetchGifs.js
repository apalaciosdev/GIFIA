import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = (category, quantity) => {
  const [state, setState] = useState({
    data: [],
    loading: true
  })

  useEffect(() => {
    
    //hacemos la peticion http y retornamos los gifs con el estado de loading
    getGifs( category, quantity )
        .then((gifs => {
          setState({
            data: gifs,
            loading: false
          })
        }))

  }, [category]) 
      //Con esto hacemos que solo se ejecute una vez, que es cuando se renderiza,
      //asi cuando react tenga que recargar un componente, este se quedará cargado
      //si category cambia, lo ponemos aqui [category] para que se vuelva a renderizar


  return state  //data: [], loading: true
}