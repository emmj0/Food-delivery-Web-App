import React, { useContext } from 'react'
import './placeorder.css'
import { StoreContext } from '../../context/Storecontext'

const placeorder = () => {
  const {gettotal} = useContext(StoreContext)
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="title">Delievery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First-name'/>
          <input type="text" placeholder='Second-name'/>
        </div>
        <input type="email"  placeholder='Email Address' />
        <input type="text" placeholder='Street' />
        <div className="multi-fields">
          <input type="text" placeholder='City'/>
          <input type="text" placeholder='State'/>
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip Code'/>
          <input type="text" placeholder='Country'/>
        </div>
        <input type="text" placeholder='Phone' />
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Total</h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>{gettotal()}</p>
            <hr />
          </div>
          <div className="cart-total-details">
            <p>Deliervy Fee</p>
            <p>{gettotal()===0?0:2}</p>
            <hr />
          </div>
          <div className="cart-total-details">
            <b>Total</b>
            <b>{gettotal()===0?0: gettotal() + 2}</b>
          </div>
        <button>Proceed to Payment</button>
        </div>
      </div>
      
    </form>
  )
}

export default placeorder
