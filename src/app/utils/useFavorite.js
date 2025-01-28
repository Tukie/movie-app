export const addToFavorite = (movieDetails) => {
  const favorite = localStorage.getItem("favorite");
  const favoriteArray = JSON.parse(favorite) || [];

  // check is exists
  if (!favoriteArray.some((item) => item.id === movieDetails.id)) {
    favoriteArray.push(movieDetails);
    const favoriteString = JSON.stringify(favoriteArray);
    localStorage.setItem("favorite", favoriteString);
  }
};

export const checkIsFavorite = (movieDetails) => {
  const favorite = localStorage.getItem("favorite");
  const favoriteArray = JSON.parse(favorite) || [];

  return favoriteArray.some((item) => item.id === movieDetails.id);
};

export const removeFromFavorite = (movieDetails) => {
  const favorite = localStorage.getItem("favorite");
  const favoriteArray = JSON.parse(favorite) || [];

  const index = favoriteArray.findIndex((item) => item.id === movieDetails.id);

  if (index !== -1) {
    favoriteArray.splice(index, 1);
    const favoriteString = JSON.stringify(favoriteArray);
    localStorage.setItem("favorite", favoriteString);
  }
};

export const getAllFavorite = () => {
  const favorite = localStorage.getItem("favorite");
  const favoriteArray = JSON.parse(favorite) || [];
  return favoriteArray;
}
