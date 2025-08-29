import React from "react";
import { Link } from "react-router-dom";

const Card = React.memo(function Cards({ id, name, image, description }) {
  return (
    <div className="place-items-center my-2">
      <div
        className="card bg-base-100 w-72 shadow-sm h-full md:w-80 2xl:w-96"
        id={id}
      >
        <figure className="">
          <img src={image} className="rounded-xl aspect-16/9 object-cover" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="card-actions w-full">
            <Link className="w-full" to={`/${id}`}>
              <button className="btn btn-primary w-full">View Recipe</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Card;
