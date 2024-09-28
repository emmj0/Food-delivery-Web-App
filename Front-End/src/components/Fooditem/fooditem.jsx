import React, { useContext } from 'react'
import './fooditem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/Storecontext';
const fooditem = ({id,name,price,description,image}) => {

    const{cartitems,addtocart,removefromcart} = useContext(StoreContext)

  return (
    <div className='food-item'>
        <div className="food-item-image-container">
            <img className="food-item-img" src={image} alt="" />
            {
                !cartitems[id]
                ? <img className='add' onClick={()=>{
                    addtocart(id);
                }} src={assets.add_icon_white} alt="" /> :
                <div className="food-item-counter">
                    <img onClick={()=>{
                        removefromcart(id);
                    }} src={assets.remove_icon_red} alt="" />
                    <p>{cartitems[id]}</p>
                    <img onClick={()=>{
                        addtocart(id);
                    }} src={assets.add_icon_green} alt="" />

                </div>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-rating">
                <p className='food-item-name'>
                    {name}
                </p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-description">
                {description}
            </p>
            <p className="food-item-price">
                ${price}
            </p>
        </div>
    </div>
  )
}

export default fooditem
