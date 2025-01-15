import React from "react";

const Rating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <>
      <div className="pizza-block__rating">
        <span>Оценка:</span>
        <div className="pizza-block__rating-stars">
          {[...new Array(rating)].map((_, i) => (
            <i key={i}>★</i>
          ))}
        </div>
      </div>
    </>
  );
};

export default Rating;
