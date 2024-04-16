import React, { useState } from 'react';
import './Search.css';  // Adjust the path based on your folder structure

function FrontendSearch({ products }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(products);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        if (event.target.value) {
            const filtered = products.filter(product => 
                product.name.toLowerCase().includes(event.target.value.toLowerCase()) ||
                product.description.toLowerCase().includes(event.target.value.toLowerCase())
            );
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts(products);
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleSearch}
            />
            <ul>
                {filteredProducts.map(product => (
                    <li key={product.id}>{product.name} - ${product.price}</li>
                ))}
            </ul>
        </div>
    );
}

export default FrontendSearch;
