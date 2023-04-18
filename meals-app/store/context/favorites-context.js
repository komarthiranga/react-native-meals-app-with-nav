import { createContext } from 'react';

const FavoritesContext = createContext({
    ids: [],
    addFavorite: id => {},
    removeFavorite: id => {}
})


export default FavoritesContext;