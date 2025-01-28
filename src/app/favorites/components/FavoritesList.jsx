"use client";
import {
  addToFavorite,
  checkIsFavorite,
  removeFromFavorite,
  getAllFavorite,
} from "@/app/utils/useFavorite";
import { useEffect, useState } from "react";
import NotFound from "@/app/components/NotFound";
import MovieLoader from "@/app/components/MovieLoader";
import MovieCard from "@/app/components/MovieCard";

export default function FavoritesList() {
  const [favorite, setFavorite] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFavorite = async () => {
    setLoading(true);
    setTimeout(() => {
      setFavorite(getAllFavorite);
      setLoading(false);
    }, 1500);
  };

  useEffect(() => {
    fetchFavorite();
  }, []);

  // Add to favorite
  const handleAddToFavorite = (movieDetails) => {
    addToFavorite(movieDetails);
  };

  // Remove from favorite
  const handleRemoveFromFavorite = (movieDetails) => {
    removeFromFavorite(movieDetails);
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {loading && (
          <>
            {Array.from({ length: 16 }).map((_, index) => (
              <div key={index}>
                <MovieLoader />
              </div>
            ))}
          </>
        )}

        {!loading &&
          favorite.length > 0 &&
          favorite.map((movie) => (
            <div key={movie.id}>
              <MovieCard
                id={movie.id}
                image={movie?.primaryImage?.url}
                title={movie?.titleText?.text}
                isFavorite={checkIsFavorite(movie)}
                onAddToFavorite={() => handleAddToFavorite(movie)}
                onRemoveFromFavorite={() => handleRemoveFromFavorite(movie)}
              />
            </div>
          ))}
      </div>

      {!loading && !favorite.length && (
        <div className="w-full mx-auto">
          <NotFound />
        </div>
      )}
    </div>
  );
}
