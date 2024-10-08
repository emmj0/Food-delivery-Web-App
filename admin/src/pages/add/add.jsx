import React, { useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import './add.css'
import axios from 'axios'
import { toast } from 'react-toastify'
const add = ({url}) => {
  
  const [image,setimage] = useState(false);
  const [data,setdata] = useState({
    name: '',
    description: '',
    price: '',
    category: 'Salad'
  })
  const onchangehandler = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    setdata(data=>({
      ...data,
      [name]:value
    }))
  }

  const onsubmithandle = async(event)=>{
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('price', Number(data.price));
    formData.append('category', data.category);
    formData.append('image', image);
    const response = await axios.post(`${url}/api/use/add`,formData);
    if(response.data.success){
      setdata({
        name: '',
        description: '',
        price: '',
        category: 'Salad'
      })
      setimage(false);
      toast.success(response.data.message)
    }
    else{
      toast.error(response.data.message)

    }

  }

  return (
    <div className='add'>
      <form onSubmit={onsubmithandle} className='flex-col'>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
          </label>
          <input onChange={(e)=>{
            setimage(e.target.files[0]);
          }} type="file" id='image' hidden required />
        </div>
        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input onChange={onchangehandler} value={data.name} type="text" name='name' placeholder='Type Here' />
        </div>
        <div className="add-product-description flex-col">
          <p>Product Description</p>
          <textarea onChange={onchangehandler} value={data.description} name="description" rows="6" placeholder='Write Content here !' required></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Category</p>
            <select onChange={onchangehandler} value={data.category} name="category">
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="add-price">
            <p>Price</p>
            <input onChange={onchangehandler} value={data.price} type="number" name='price' placeholder='$10' />
          </div>
        </div>
        <button type='submit' className='add-button'>Add</button>
      </form>
    </div>
  )
}

export default add
