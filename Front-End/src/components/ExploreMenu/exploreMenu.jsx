import React from 'react'
import './exploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({ category, Setcategory }) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Our Menu</h1>
      <p className='explore-menu-text'>
        Explore our menu and discover a wide variety of dishes to satisfy every craving. From classic favorites to exciting new flavors, there's something for everyone. Dive in and find your next delicious meal!
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div 
            onClick={() => {
              Setcategory(prev => prev === item.menu_name ? "All" : item.menu_name);
              console.log(`Clicked item: ${item.menu_name}`);
              console.log(`Updated category: ${category}`); // This will log the previous category, not the updated one
            }} 
            key={index} 
            className={`explore-menu-list-item ${category === item.menu_name ? "Active" : ""}`}
          >
            <img className={category === item.menu_name ? "Active" : ""} src={item.menu_image} alt={item.menu_name} />
            <p>{item.menu_name}</p> 
          </div>
        ))}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu;
