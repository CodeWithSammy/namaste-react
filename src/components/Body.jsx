import React, { useState, useEffect } from "react";
import ResCard from "./ResCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resListed, setResListed] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRes, setFilteredRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();

      const fetchedRestaurants =
        json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      if (fetchedRestaurants && Array.isArray(fetchedRestaurants)) {


        // Flatten to array of .info objects, matching your ResCard's expected props
        const restaurantInfos = fetchedRestaurants.map((res) => res.info);
        
        setResListed(restaurantInfos);
        setFilteredRes(restaurantInfos); // Initialize filteredRes with all restaurants
      } else {
        console.error("Restaurants data not found in API response");
      }
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  };

  return resListed.length === 0 ? <Shimmer />: (
    <div className="body">
        <div className="filter">
            <div className="search">
                <input type="text" name="search bar" className="search-box" 
                value={searchText}
                onChange={(e) =>{
                    setSearchText(e.target.value);
                }}/> 
                <button className="search-btn" onClick={() => {
                    console.log("Search Text: ", searchText);
                    const filteredList = resListed.filter(
                        (restaurant) => restaurant.name.toLowerCase().includes(searchText.toLowerCase())
                    );

                    setFilteredRes(filteredList);
                }}>
                    search
                </button>
            </div>
            <div
        className="filter-btn"
        onClick={() => {
          const filteredList = resListed.filter(
            (restaurant) => parseFloat(restaurant.avgRating) > 4.5
          );
          console.log("Filtered Restaurants: ", filteredList);
          setFilteredRes(filteredList);
        }}
      >
        Top Rated Restaurants
      </div>
        </div>
      
<div className="res-container">
  {resListed && resListed.length > 0 ? (
    filteredRes.map((restaurant, index) => {
      console.log(`Rendering restaurant: id=${restaurant.id}, name=${restaurant.name}`);
      return (
        <ResCard
          key={restaurant.id}
          resData={restaurant}
        />
      );
    })
  ) : (
    <p>No restaurants available.</p>
  )}
</div>

    </div>
  );
};

export default Body;
