import React, { useEffect } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router';
import { SWIGGY_API_URL } from '../utils/constants'; // Assuming you have a constants file for URLs

const ResMenu = () => {
    const [resInfo, setResInfo] = React.useState(null);
    const {id} = useParams(); // Assuming you're using react-router for routing
    console.log("id", id);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
  try {
    const response = await fetch(`${SWIGGY_API_URL}${id}`); // ✅ Correct string interpolation
    const json = await response.json();
    console.log(json);
    setResInfo(json.data);
  } catch (error) {
    console.error("Failed to fetch menu:", error);
  }
};


  const { name, cuisines, avgRating,costForTwoMessage,labels,totalRatingsString } = resInfo?.cards?.[2]?.card?.card.info || {};
  console.log(resInfo?.cards?.[2]?.card?.card || {});

  const itemCards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards;
console.log(itemCards);



  return resInfo === null ? <Shimmer/> :(
    <div className="res-menu">
      <h1>{name}</h1>
      <h3>{cuisines}</h3>
      <h3>{avgRating} ({totalRatingsString})</h3>
        <h5>{costForTwoMessage}</h5>
        <h4>Address :<p>{labels?.[1]?.message}</p></h4>
      
      <h2>Recommended Items</h2>
      <ul>
        {itemCards.map(item => (
          <li key={item.card.info.id}>
            {item.card.info.name} - ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    
    </div>
  );
};

export default ResMenu;
