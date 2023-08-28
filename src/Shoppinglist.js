import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./components/Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [myData , setMyData]=useState(items)
  const [searchInput, setSearchInput]= useState("")
  let filteredItem;
  const [filteredData, setFilteredData]= useState()


  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function updateData(data){
    setMyData([...myData, data])
  }
  

  let itemsToDisplay = myData.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  function updateFilter(e){
    let value=e.target.value
    setFilteredData([])
    setSearchInput("")
    setSearchInput(value)
    console.log(searchInput)
    let myFilteredData = myData.filter((item) => {
      return item.name.toLowerCase().includes(searchInput);
    });
    setFilteredData(myFilteredData)
  
  }
  if(filteredData != null){
    filteredItem=filteredData.map((item) => {
      return <Item key={item.id} name={item.name} category={item.category} />
    })
    
}
 
  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={updateData}/>
      <Filter onCategoryChange={handleCategoryChange} search={searchInput} onSearchChange={updateFilter} />
      <ul className="Items">
        { filteredData != null? (filteredItem): (itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        )))}
      </ul>
    </div>
  );
}

export default ShoppingList;