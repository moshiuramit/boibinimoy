'use client';
import { StoreContext } from "@/app/context";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { toast } from "react-toastify";
const AddToCart = ({book}) => {
  const {cartData, setCartData} = useContext(StoreContext);
  const handleCart = (e, reason) => {
    e.preventDefault();
    const newData = {...book, type: reason};
    setCartData([...cartData, newData]);
    console.log(cartData);
    toast.success(`Added ${newData.title} to the cart`, {
      autoClose: 1000,
      position: toast.POSITION.TOP_RIGHT
    })
  }
  return (
    <div className="flex justify-around mt-5 border-t-2 p-1">

      <button 
        className="bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-sm"
        onClick={(event) => handleCart(event, 'Buy')} >
        <ShoppingCartIcon className="w-5 mr-1 inline-block" /> to Buy </button>


      <button 
        className="bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-sm"
        onClick={(event) => handleCart(event, 'Rent')} >
        <ShoppingCartIcon className="w-5 mr-1 inline-block" /> to Rent </button>

    </div>
  )
}

export default AddToCart