import { createContext, useEffect, useState } from "react";
import asios from 'axios'

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [food_list, setfoodlist] = useState([])
    const [cartitems, setcartitems] = useState({})

    const [token, settoken] = useState(localStorage.getItem("token") || "");


    const url = 'http://localhost:5000';

    const fetch_food = async () => {
        try {
            const response = await axios.get(url + "/api/use/list");
            console.log("Food data:", response.data);  // Log the response data
            if (response.data.success) {
                setfoodlist(response.data.data);  // Make sure this matches your API structure
            } else {
                console.error("Failed to fetch food data:", response.data.message);
            }
        } catch (error) {
            console.error("Error fetching food data:", error);
        }
    };
    

    const addtocart = (itemID) => {
        if (!cartitems[itemID]) {
            setcartitems((prev) => ({
                ...prev,
                [itemID]: 1
            }));
        }
        else {
            setcartitems((prev) => ({
                ...prev,
                [itemID]: (prev[itemID] || 0) + 1
            }));
        }
    }
    useEffect(() => {
        console.log(cartitems);
    }, [cartitems])

    const removefromcart = (itemID) => {
        setcartitems((prev) => ({ ...prev, [itemID]: prev[itemID] - 1 }))
    }

    useEffect(() => {
        async function loaddata() {
            await fetch_food();

            async function loadData() {
                await setfoodlist();
                const storedToken = localStorage.getItem("token");
                if (storedToken) {
                    settoken(storedToken); // Set token from localStorage on page load
                }
            }
        }
        loaddata();
    }, []);

    const gettotal = () => {
        let totalamount = 0;
        for (const item in cartitems) {
            if (cartitems[item] > 0) {
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
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;