import { createContext, useState } from 'react'

const FavoriteContext = createContext({
  favorites: [],
  totalFavorite: 0,
})

function FavoriteContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([])

  function addFavoriteHandler(favorite) {
    setUserFavorites(userFavorites.concat(favorite))
  }

  function removeFavoriteHandler() {}

  function itemIsFavoriteHandler() {}

  const context = {
    favorites: userFavorites,
    totalFavorite: userFavorites.length,
  }

  const context = {}
  return (
    <FavoriteContext.Provider value={context}>
      {props.children}
    </FavoriteContext.Provider>
  )
}
