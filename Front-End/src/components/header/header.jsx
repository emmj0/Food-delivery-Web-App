import React from 'react'
import './header.css'

const header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>Order your favourite food here</h2>
            <p>"Order your favorite food here and treat yourself to a delicious meal! Whether you're craving something savory, sweet, or spicy, we've got you covered. Just a few clicks, and your favorite dishes will be on their way to your door!"</p>
            <a href="#explore-menu"><button>View Menu</button></a>
        </div>
    </div>
  )
}

export default header
