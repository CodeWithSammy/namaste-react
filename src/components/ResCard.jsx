import { CDN_URL } from "../utils/constants";

const ResCard = ({ resData }) => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={`${CDN_URL}${resData.cloudinaryImageId}`}
        alt={resData.name}
      />
      <h3>{resData.name}</h3>
      <p>{resData.cuisines?.join(", ")}</p>
      <p>Rating: {resData.avgRating}</p>
      <p>Cost for Two: {resData.costForTwo}</p>
      <p>Delivery Time: {resData.sla?.deliveryTime} mins</p>
    </div>
  );
};

export default ResCard;
