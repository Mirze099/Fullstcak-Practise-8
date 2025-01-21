import React, { useContext } from "react";
import { favoriteContext } from "../../context/FavoriteContext";
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Favorites() {
  let { favorites, setFavorites } = useContext(favoriteContext);
  function handleDeleteFav(id) {
    let filteredFav = favorites.filter((item) => item._id !== id);
    setFavorites(filteredFav);
  }
  return (
    <div className="main container">
      {favorites.length == 0 ? (
        <h1>Sizin Favoritiniz Bosdur</h1>
      ) : (
        <div className="serviceCards">
          {favorites.map((fav) => (
            <div className="serviceCard">
              <div className="serviceCardImg">
                <img src={fav.img} alt="" />
              </div>
              <div className="serviceCardInfo">
                <h1>{fav.name}</h1>
                <p>{fav.desc}</p>
                <IconButton onClick={() => handleDeleteFav(fav._id)}>
                  <FavoriteIcon />
                </IconButton>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
