import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function CharacterDetails() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    axios
      .get(`https://665736a19f970b3b36c865bf.mockapi.io/imgs/${id}`)
      .then((response) => {
        setCharacter(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (!character) return <div>Loading...</div>;

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={character.image}
          alt={character.name}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-3xl font-bold">{character.name}</h1>

          <p>Gender: {character.gender}</p>

          <Link to={"/"}>
            <button className="btn btn-primary">Return</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CharacterDetails;
