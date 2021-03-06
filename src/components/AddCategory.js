import React, { useState } from 'react'
import PropTypes from 'prop-types'
import '../assets/css/AddCategory.css'


const AddCategory = ({ setCategories }) => {

  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault(inputValue)

    if (inputValue.trim().length > 2) {

      setCategories(categories => [inputValue, ...categories])
      setInputValue('')
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="field" id="searchform">
          <input type="text" id="searchterm" placeholder="what are you searching for?" value={inputValue} onChange={handleInputChange} />
          <button type="button" id="search" onClick={handleSubmit}>Find!</button>
        </div>
      </form>
    </>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}

export default AddCategory