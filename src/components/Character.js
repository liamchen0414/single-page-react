import React from "react";

function Character(character) {
  return (
    <div className="col-3">
      <div className="card" style={{ height: 500, marginBottom: 20 }}>
        <img
          src={character.image}
          alt={character.name}
          className="card-img-top"
        />
        <div className="card-body">
          <h3 className="card-title">{character.name}</h3>
          <div>
            <p>{`Origin: ${character.origin && character.origin.name}`}</p>
            <p>{`Status: ${character.status}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Character;
