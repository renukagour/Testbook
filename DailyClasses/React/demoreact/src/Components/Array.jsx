import React from 'react'

const Array = () => {
    let food=['Pulses','Flour','Pizza','Rice','Biryani','Pasta'];
    const foodItems = [
      {
        name: "Apple",
        category: "Fruit",
        price: 0.5,
        inStock: 'Yes'
      },
      {
        name: "Banana",
        category: "Fruit",
        price: 0.3,
        inStock: 'Yes'
      },
      {
        name: "Carrot",
        category: "Vegetable",
        price: 0.2,
        inStock: 'Yes'
      },
      {
        name: "Broccoli",
        category: "Vegetable",
        price: 1.2,
        inStock: false
      },
      {
        name: "Chicken Breast",
        category: "Meat",
        price: 5.0,
        inStock: 'Yes'
      },
      {
        name: "Salmon",
        category: "Fish",
        price: 8.0,
        inStock: false
      },
      {
        name: "Bread",
        category: "Grain",
        price: 2.5,
        inStock: 'Yes'
      },
      {
        name: "Milk",
        category: "Dairy",
        price: 1.5,
        inStock: 'Yes'
      },
      {
        name: "Cheddar Cheese",
        category: "Dairy",
        price: 3.0,
        inStock: false
      },
      {
        name: "Eggs",
        category: "Dairy",
        price: 2.0,
        inStock: 'Yes'
      }
    ];
    
    // console.log(food);
  
  return (
   <>
   <h1>Array in React</h1>
   <ul>
    {food.map(fname=> (
      <li>{fname}</li>
      )
    )}
   </ul>


   <ul>
    {foodItems.map((food)=>(
       <>
        <h2>{food.name}</h2>
        <p>{food.category}</p>
        <p>{food.inStock}</p>
       </>
    )
    
    )}
   </ul>
   </>
  )
}

export default Array