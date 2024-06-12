import React, { useEffect, useState } from 'react'
import { IoFilterCircle } from "react-icons/io5";
import Cards from '../../components/Cards';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [sortOption, setSortOption] = useState("default");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/products.json");
                const data = await response.json();
                // console.log(data)
                setProducts(data)
                setFilteredItems(data)
            } catch (error) {
                console.log("Error fetching data:", error)
            }
        }


        fetchData();
    }, [])


    // console.log(products)

    // filtering function
    const filterItems = (category) => {
        const filtered = category == "all" ? (products) : products.filter((item) => item.category === category);

        setFilteredItems(filtered);
        setSelectedCategory(category);
    }


    // show all pro

    const showAll = () => {
        setFilteredItems(products);
        setSelectedCategory("all");
    }

    // sorting func
    const handleSortChange = (option) => {
        setSortOption(option);
        // log sort

        let sortedItems = [...filteredItems];


        switch (option) {
            case "low-to-high":
                sortedItems.sort((a, b) => a.price - b.price);
                break;
            case "high-to-low":
                sortedItems.sort((a, b) => b.price - a.price);
                break;
             default:
                sortedItems = onClick={showAll};
                break;
        }

        setFilteredItems(sortedItems);
    }

    return (
        <div className='max-w-screen-2xl container mx-auto xl:px-28 px-4 mb-12'>
            <h2 className='title'>Shop Now in LuxeLooms</h2>

            {/* prod cards */}
            <div>
                <div className='flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8'>

                    {/* all btn */}
                    <div className='flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap'>
                        <button onClick={showAll}>All  Products</button>
                        <button onClick={() => filterItems("Hijab")}>Hijabat</button>
                        <button onClick={() => filterItems("Eid & Ramadan Collection")}>Eid & Ramadan Collection</button>
                        <button onClick={() => filterItems("Accessories")}>Accessories</button>
                    </div>

                    {/* sort opt */}
                    <div className='flex justify-end mb-4 rounded-sm'>
                        <div className='bg-black p-2'>
                            <IoFilterCircle className='text-white h-4 w-4 ' />
                        </div>
                        <select
                            id='sort'
                            onChange={(e) => handleSortChange(e.target.value)}
                            value={sortOption}
                            className='bg-black text-white px2 py-1 rounded'>
                            <option value="default">Default</option>
                            <option value="low-to-high">Low To High</option>
                            <option value="high-to-low">High To Low</option>
                        </select>
                    </div>


                </div>

                <Cards filteredItems={filteredItems} />


            </div>
        </div>
    )
}

export default Products