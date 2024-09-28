import React, { useState } from 'react'
import './home.css'
import Header from '../../components/header/header'
import ExploreMenu from '../../components/ExploreMenu/exploreMenu'
import Fooddisplay from '../../components/Fooddisplay/Fooddisplay'
import Appdownload from '../../components/Appdownload/appdownload'
import Footer from '../../components/footer/footer'

const home = () => {
  const [category,Setcategory] = useState("All")
  return (
    <div>
      <Header/>
      <ExploreMenu category ={category} Setcategory={Setcategory} />
      <Fooddisplay category ={category}/>
      <Appdownload/>
    </div>
  )
}

export default home;
