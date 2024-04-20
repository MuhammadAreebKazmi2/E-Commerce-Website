import React, { useContext, useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { ShopContext } from '../../Context/ShopContext';

export const Navbar = () => {
    const [menu, setMenu] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const { getTotalCartItems, all_product } = useContext(ShopContext);
    const searchRef = useRef();  // Ref for the search container

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setSearchResults([]);
                setSearchTerm('');
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        if (event.target.value) {
            const searchTermLower = event.target.value.toLowerCase();
            const filtered = all_product.filter(product => {
                const name = product.name || ""; // Fallback to an empty string if undefined
                const description = product.description || ""; // Fallback to an empty string if undefined
                return name.toLowerCase().includes(searchTermLower) ||
                       description.toLowerCase().includes(searchTermLower);
            });
            setSearchResults(filtered);
        } else {
            setSearchResults([]);
        }
    };
    

    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            setSearchTerm('');
            setSearchResults([]);
        } else if (event.key === 'Enter') {
            console.log('Search term:', searchTerm);
            // Optionally redirect to a search results page or handle search
        }
    };

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="HU DUKAAN" />
                <p>HU DUKAAN</p>
            </div>
            <ul className="nav-menu" ref={searchRef}>
                <li onClick={() => setMenu("shop")} ><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link> {menu === "shop" ? <hr /> : null}</li>
                <li onClick={() => setMenu("women")} ><Link style={{ textDecoration: 'none' }} to='/merch'>Merch</Link> {menu === "women" ? <hr /> : null}</li>
                <li onClick={() => setMenu("kids")} ><Link style={{ textDecoration: 'none' }} to='/accessory'>Accessory</Link> {menu === "kids" ? <hr /> : null}</li>
                <li onClick={() => setMenu("men")} ><Link style={{ textDecoration: 'none' }} to='/new_arrivals'>New Arrivals</Link> {menu === "men" ? <hr /> : null}</li>
                <li>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        onKeyDown={handleKeyDown}
                        className="nav-search-input"
                    />
                    {searchResults.length > 0 && (
                        <ul className="search-results">
                            {searchResults.map(product => (
                                <li key={product.id}>
                                    <Link to={`/product/${product.id}`} onClick={() => setSearchResults([])}>
                                        <img src={product.image} alt={product.name} className="product-image" /> {/* Added */}
                                        {product.name} - ${product.new_price}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            </ul>
            <div className='nav-login-cart'>
                {localStorage.getItem('auth-token') ?
                    <button onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/') }}>Logout</button> :
                    <Link style={{ textDecoration: 'none' }} to='/login'><button>Login</button></Link>
                }
                <Link style={{ textDecoration: 'none' }} to='/cart'>
                    <img src={cart_icon} alt="Cart" />
                    <div className='nav-cart-count'>{getTotalCartItems()}</div>
                </Link>
            </div>
        </div>
    );
};
