import React from "react";
import { Link } from "react-router-dom";

function Card({ id, Name, image, species, deleteItem }) {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl md:w-[30%] max-sm:w-[100%] text-wrap min-h-[284.22px] max-w-[500px] max-h-[px]">
      <figure>
        <img src={image} alt={Name} className="h-[100%] w-[100%]" />
      </figure>
      <div className="card-body">
        <h2 className="card-title break-words">{Name}</h2>
        <p className="break-words-">{species}</p>
        <div className="card-actions justify-end">
          <Link to={`/${id}`} className="btn btn-info">
            Details
          </Link>
          <button onClick={() => deleteItem(id)} className="btn btn-warning">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
