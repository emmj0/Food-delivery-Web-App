import { createContext, useEffect, useState } from "react";
import asios from 'axios'

export const StoreContext = createContext(null)

const StoreContextProvider = (props) =>{

    const [food_list,setfoodlist] = useState([])
    const [cartitems,setcartitems] = useState({})

    const [token,settoken] = useState("");

    const url = 'http://localhost:5000';

    const fetch_food = async ()=>{
        const response = await axios.get(url+"/api/use/list",()=>{
            console.error();
        });
        setfoodlist(response.data.data)
    }

    const addtocart = (itemID) => {
        if(!cartitems[itemID]){
            setcartitems((prev)=> ({
                ...prev,
                [itemID]:1
            }));
        }
        else{
            setcartitems((prev) => ({
                ...prev,
                [itemID]: (prev[itemID] || 0) + 1
            }));
        }
    }
    useEffect(()=>{
        console.log(cartitems); 
    },[cartitems])

    const removefromcart = (itemID) =>{
        setcartitems((prev)=> ({...prev,[itemID]:prev[itemID] -1}))
    }

    useEffect(()=>{
        
        async function loaddata() {
            await fetch_food();
            if(localStorage.getItem("token")){
                settoken(localStorage.getItem("token"));
            }
        }
        loaddata();
    },[])

    const gettotal = () =>{
        let totalamount = 0;
            for(const item in cartitems){
                if(cartitems[item] > 0){
                totalamount += food_list[item].price * cartitems[item]
            }
        }
        return totalamount;
    }

    const contextValue = {
        food_list,
        cartitems,
        setcartitems,
        addtocart,
        removefromcart,
        gettotal,
        url,
        token,
        settoken
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;