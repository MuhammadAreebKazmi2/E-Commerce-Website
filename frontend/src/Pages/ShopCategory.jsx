import React, { useEffect, useState } from "react";
import "./CSS/ShopCategory.css";
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from "../Components/Items/Item";
import { Link } from "react-router-dom";

const ShopCategory = (props) => {

  const [allproducts, setAllProducts] = useState([]);

  const fetchInfo = () => { 
    fetch('http://localhost:4000/getproducts') 
            .then((res) => res.json()) 
            .then((data) => setAllProducts(data))
    }

    useEffect(() => {
      fetchInfo();
    }, [])

    

    const handleSortBy = (reverse) => {
      let sorted = allproducts.sort((a, b) => {
        // Convert new_price to numbers for comparison
        const priceA = a.new_price || 0; // If new_price is undefined/null, default to 0
        const priceB = b.new_price || 0;
        return reverse ? priceA - priceB : priceB - priceA;
        
      }
    );
      console.log(allproducts);
      setAllProducts([...sorted]);
      console.log(allproducts,sorted);
    }
  return (
    <div className="shopcategory">
      <img src={props.banner} className="shopcategory-banner" alt="" />
      <div className="shopcategory-indexSort">
        <p><span>Showing 1 - 12</span> out of 54 Products</p>
        <div className="shopcategory-sort" 
        onClick={e => handleSortBy (false)}
        > Sort by (high to low) <img src={dropdown_icon} alt="" /></div>
        <div className="shopcategory-sort" 
        onClick={e => handleSortBy (true)}
        > Sort by (low to high) <img src={dropdown_icon} alt="" /></div>
      </div>
      <div className="shopcategory-products">
        {allproducts.map((item,i) => {
            if(props.category===item.category)
            {
              return <Item id={item.id} key={i} name={item.name} image={item.image}  new_price={item.new_price} old_price={item.old_price}/>;
            }
            else
            {
              return null;
            }
        })}
      </div>
      <div className="shopcategory-loadmore">
      <Link to='/' style={{ textDecoration: 'none' }}>Explore More</Link>
      </div>
    </div>
  );
};


export default ShopCategory;
