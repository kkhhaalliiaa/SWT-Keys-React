import React, { useEffect, useState } from "react";
import './Shop.css';

export default function Shop() {
    const [data, setData] = useState(null);
    const [filters, setFilters] = useState({
        price: "",   // 'under' or 'over'
        size: "",    // 'compact', 'full', 'mk', 'numberpad', 'tenkeyless'
        hotSwap: ""  // true or false
    });

    const [filteredData, setFilteredData] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/products');
                const data = await response.json();
                setData(data);
                setFilteredData(data); // Set initial data to filteredData
                console.log(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []); // Empty dependency array to run the effect once

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prev) => {
            const newFilters = {
                ...prev,
                [name]: value
            };
            // Apply filters whenever the user selects a new filter
            applyFilters(newFilters);
            return newFilters;
        });
    };

    const applyFilters = (newFilters) => {
        let filtered = [...data];

        if (newFilters.price) {
            filtered = filtered.filter(product => {
                return newFilters.price === 'under' ? product.price < 100 : product.price >= 100;
            });
        }

        if (newFilters.size) {
            // Ensure that size comparison is case-sensitive
            filtered = filtered.filter(product => product.size && product.size.toLowerCase() === newFilters.size.toLowerCase());
        }

        setFilteredData(filtered); // Update filtered data
    };

    return (
        <div className="main-content">
            <h1 className="form-title">Shop</h1>

            {/* Filters Section */}
            <div className="filters">
                <label>
                    Price:
                    <select name="price" onChange={handleFilterChange}>
                        <option value="">All</option>
                        <option value="under">Under $100</option>
                        <option value="over">Over $100</option>
                    </select>
                </label>

                <label>
                    Size:
                    <select name="size" onChange={handleFilterChange}>
                        <option value="">All Sizes</option>
                        <option value="compact">Compact</option>
                        <option value="mk">Mechanical Keyboard</option>
                        <option value="numberpad">Numberpad</option>
                        <option value="tenkeyless">Tenkeyless</option>
                    </select>
                </label>
            </div>

            {filteredData ? (
                <div className="card-container">
                    {filteredData.map((eachProduct, index) => (
                        <div key={index} className="card">
                            <div className="card-img">
                                <img src={eachProduct.img} alt={eachProduct.title} />
                            </div>
                            <div className="card-content">
                                <h3 className="card-title">{eachProduct.title}</h3>
                                <p className="card-date">Price: ${eachProduct.price}</p>
                                <p className="card-description">Size: {eachProduct.size}</p>
                                <a href="#" className="read-more">Read More</a>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="error">There aren’t currently any products available.</p>
            )}
        </div>
    );
}
