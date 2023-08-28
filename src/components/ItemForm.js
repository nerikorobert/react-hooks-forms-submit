import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {
  // console.log(props)
  const [name, setName]=useState("")
  const [category, setCategory]=useState("Produce")

  function handleName(e){
    setName(e.target.value)
  }

  function handleCategory(e){
    setCategory(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    let data={
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: name,
      category: category,
    }
    console.log(name, category, data)
    props.onItemFormSubmit(data)
    
    setName("")
    setCategory("")
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleName}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;