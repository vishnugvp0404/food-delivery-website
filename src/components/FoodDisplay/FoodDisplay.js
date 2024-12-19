import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../../components/FoodItem/FoodItem'

const FoodDisplay = ({category}) => {

    const { food_list } = useContext(StoreContext);


  return (
    <div className='food-Display' id='food-Display'>
        <h2>Top dishes near you</h2>
        <div className='food-Display-list' >
        {food_list.map((item, index) => {
          if(category==="All" || category===item.category) {
            return (
              <FoodItem 
             key={index} 
              id={item._id} 
              name={item.name} 
              description={item.description} 
              price={item.price} 
              image={item.image}
                />
              );
          }
          
        })}


        </div>
    </div>
  )
}

export default FoodDisplay
