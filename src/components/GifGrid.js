import React, {  } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem'
import '../assets/css/GifGrid.css'


const GifGrid = ({category, quantity}) => {
              //llamamos images a data
  const {data: images, loading} = useFetchGifs(category, quantity)



  return (
    <div className="gif-grid">
      <h3>{category}</h3>

    {loading && <p>Loading</p>}

      <div className='card-grid'>

          {
            images.map( gif => (

              <GifGridItem {...gif}  key={ gif.id }/>
            ))
          }

      </div>
    </div>
  );
};

export default GifGrid;