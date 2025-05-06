import React from "react";
import { assets } from "../assets/assets";

const StarRating = ({ rating = 4 }) => {
  return (
    <>
      {Array(5)
        .fill("")
        .map((_id, index) => (
          <img
            key={_id}
            src={
              rating > index ? assets.starIconFilled : assets.starIconOutlined
            }
            alt="star-icon"
            className="w-4.5 h-4.5"
          />
        ))}
    </>
  );
};

export default StarRating;
