import React, { useContext } from 'react'
import './cart.css'
import { StoreContext } from '../../context/Storecontext'
import { useNavigate } from 'react-router-dom';

const cart = () => {
  const { cartitems, food_list, removefromcart ,gettotal } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {
          food_list.map((item, index) => {
            if (cartitems[item._id] > 0) {
              return (
                <div>
                  <div className="cart-items-title cart-items-item">
                    <img src={item.image} alt="" />
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <p>{cartitems[item._id]}</p>
                    <p>${item.price * cartitems[item._id]}</p>
                    <p className='cross' onClick={() => {
                      removefromcart(item._id)
                    }}>X</p>
                  </div>
                  <hr />
                </div>
              )
            }

          })
        }
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>{gettotal()}</p>
            <hr />
          </div>
          <div className="cart-total-details">
            <p>Deliervy Fee</p>
            <p>{gettotal() === 0?0:2}</p>
            <hr />
          </div>
          <div className="cart-total-details">
            <b>Total</b>
            <b>{gettotal()===0?0: gettotal() + 2}</b>
          </div>
        <button onClick={()=>{
          gettotal()===0?navigate('/cart'):navigate('/order')
        }}>Proceed to CheckOut</button>
        </div>
        <div className="cart-promo">
          <div>
            <p>Enter PromoCode here </p>
            <div className="cart-promo-input">
              <input type="text" placeholder='PromoCode' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default cart
