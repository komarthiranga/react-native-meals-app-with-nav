import FavoritesContext from "./favorites-context";
import { useState } from 'react';

const FavioritesProvider = ({children}) => {
     const [favoritesIds, setFavoritesIds] = useState([]);

     const addFavorite = id => setFavoritesIds(currentFavoriteIds => [...currentFavoriteIds, id]);
     const removeFavorite = id => setFavoritesIds( currentFavoriteIds => currentFavoriteIds.filter( itemId => itemId !== id ) )

    const favioritesContext = {
        ids: favoritesIds,
        addFavorite,
        removeFavorite
    }

    return (
        <FavoritesContext.Provider value={favioritesContext}>
             {children}
        </FavoritesContext.Provider>
    )
}

export default FavioritesProvider;