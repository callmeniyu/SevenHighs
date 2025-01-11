"use client";
import React, { useState } from 'react'
import { IoSearchOutline } from 'react-icons/io5';
import TrendingSearch from '../TrendingSearch';  
import "../../globals.css"; // Ensure this imports your CSS with the defined classes

const Search = () => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <>
            <div className="search mb-4 relative">
                <input
                    type="text"
                    placeholder="Search stories from the property world...🏠"
                    className="w-full h-12 px-4 pr-16 text-gray-700 bg-white rounded-3xl focus:outline-none focus:border-primary-dark focus:ring-2 focus:ring-primary-dark placeholder:text-sm md:placeholder:text-base"
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />
                <button className="absolute right-4 top-6 -translate-y-1/2 text-black rounded-md">
                    <IoSearchOutline size={18} />
                </button>
            </div>
            <div className={`trending-search ${isFocused ? 'show' : ''}`}>
                {isFocused && <TrendingSearch />}
            </div>
        </>
    );
};

export default Search;