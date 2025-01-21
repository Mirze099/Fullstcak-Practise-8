import React, { useEffect, useState } from "react";
import { createContext } from "react";
export const favoriteContext = createContext();

function FavoriteProvider({ children }) {
  let localFav = JSON.parse(localStorage.getItem("favorites"));
  let [favorites, setFavorites] = useState(localFav ? localFav : []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  let value = {
    favorites,
    setFavorites,
  };
  return (
    <div>
      <favoriteContext.Provider value={value}>
        {children}
      </favoriteContext.Provider>
    </div>
  );
}

export default FavoriteProvider;
