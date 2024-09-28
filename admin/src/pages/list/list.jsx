import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import './list.css'
const list = ({url}) => {
  const [list, setlist] = useState([]);



  const fetch_list = async () => {
    try {
      const response = await axios.get(`${url}/api/use/list`);

      if (response.data.success) {
        setlist(response.data.data);
      } else {
        toast.error("Error");
      }
    } catch (error) {
      console.error("There was an error fetching the list:", error);
      toast.error("Failed to fetch data");
    }
  };

  const remove_food = async (foodid) => {
    console.log(foodid);
    
    try {
      const response = await axios.post(`${url}/api/use/remove`,{id:foodid});
  
      if (response.data.success) {
        toast.success("Item removed!");
        await fetch_list(); // Refresh the list after successful removal
      } else {
        toast.error("Failed to remove item.");
      }
    } catch (error) {
      console.error("There was an error removing the item:", error);
    }
  };


  useEffect(() => {
    fetch_list();
  }, [])

  return (
    <div className='list add flex-col'>
      <p>All Food List</p>
      <div className="list-table">
        <div className='list-table-format title'>
          <b>Image</b>
          <b>Name</b>
          <b>Description</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
          {list.map((item, index) => {
            return (
              <div key={index} className='list-table-format'>
                <img src={`${url}/images/`+item.image} alt="" />
                <p>{item.name}</p>
                <p>{item.description}</p>
                <p>{item.category}</p>
                <p>{item.price}</p>
                <p onClick={()=>{
                  remove_food(item._id);
                }} className='cursor'>X</p>
              </div>
            );
          })}
      </div>
    </div>
  )
}

export default list
