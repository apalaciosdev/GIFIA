import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid';
import QuantityRenderGifs from './components/QuantityRenderGifs';


const GifExpertApp = () => {

  const [categories, setCategories] = useState([''])
  const [quantity, setQuantity] = useState(['20'])

  return (
    <div>
      <h1 className="text-gradient">GIFIA</h1>
      <AddCategory setCategories={setCategories}/>
      <QuantityRenderGifs setQuantity={setQuantity}/>

      <ol className="general-body">
        {
          categories.map(category => {
            return <GifGrid key={category} category={category} quantity={quantity}/>
          })
        }
      </ol>
 
    </div>
  );
};

export default GifExpertApp;