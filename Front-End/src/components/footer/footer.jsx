import React from 'react'
import './footer.css'
import { assets } from '../../assets/assets'
const footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo blanditiis dignissimos eaque nihil mollitia! Eveniet voluptatibus, omnis itaque, voluptatem pariatur eaque quo dignissimos debitis maxime veniam tenetur. Error, atque voluptatum.</p>
                    <div className="footer-socials">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>Zomato</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delievery</li>
                        <li>Privacy Policy</li>
                    </ul>

                </div>
                <div className="footer-content-right">
                    <h2>Get in touch</h2>
                    <ul>
                        <li>+92-3166962324</li>
                        <li>zomato@gmail.com</li>
                    </ul>

                </div>
            </div>
            <hr />
            <p className="footer-copyright">
                &copy; 2022 Zomato. All rights reserved.
            </p>
        </div>
    )
}

export default footer
