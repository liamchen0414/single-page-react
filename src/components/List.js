import React, { useState, useEffect } from "react";
import Character from "./Character";

function List(searchTerm) {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      let retries = 0;
      try {
        let characters = [];
        let page = 1;
        let morePages = true;

        while (morePages) {
          const response = await fetch(
            `https://rickandmortyapi.com/api/character/?page=${page}`
          );
          const data = await response.json();
          characters = characters.concat(data.results);
          morePages = data.info.next != undefined;
          page++;
        }
        setCharacters(characters);
        setLoading(false);
      } catch (e) {
        // code added to handle status 429 loading error
        if (e.response.status === 429 && retries < 3) {
          retries++;
          const retryIn = e.response.headers["retry-after"] * 2000 || 3000;
          setTimeout(fetchData, retryIn);
        } else {
          retries = 0;
          console.log(error);
          setError(e);
        }
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <div className="row">
        {loading ? (
          <div>Loading...</div>
        ) : (
          characters
            .filter((character) =>
              character.name
                .toLowerCase()
                .includes(searchTerm.searchTerm.toLowerCase())
            )
            .map((character) => (
              <Character
                key={character.id}
                name={character.name}
                origin={character.origin}
                image={character.image}
                status={character.status}
              />
            ))
        )}
      </div>
    </div>
  );
}

export default List;
