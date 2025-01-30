"use client";
import api from "@/app/utils/api";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useSearchParams } from "next/navigation";
import MovieLoader from "@/app/components/MovieLoader";
import MovieCard from "@/app/components/MovieCard";
import NotFound from "@/app/components/NotFound";
import {
  addToFavorite,
  checkIsFavorite,
  removeFromFavorite,
} from "@/app/utils/useFavorite";

export default function SearchResults({ isSearch }) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();

  const handleSearch = async () => {
    const keyword = searchParams.get("keyword");
    const titleType = searchParams.get("titleType");

    if (!keyword || loading) return;

    const query =
      titleType === "all" || !titleType ? "" : `&titleType=${titleType}`;

    setLoading(true);

    try {
      const { results } = await api.get(
        `/titles/search/title/${keyword.trim()}?exact=false${query}`
      );

      if (!results) {
        throw new Error("Failed to fetch data");
      }

      setResults(results);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isSearch) {
      handleSearch();
    }
  }, [isSearch]);

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
          results.length > 0 &&
          results.map((movie) => (
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

      {!loading && !results.length && (
        <div className="w-full mx-auto">
          <NotFound />
        </div>
      )}
    </div>
  );
}
