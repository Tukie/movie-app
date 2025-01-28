"use client";
import SectionTitle from "@/app/components/SectionTitle";
import YearsSelect from "./YearsSelect";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "@/app/utils/api";
import MovieLoader from "../../components/MovieLoader";
import { Button } from "@mui/material";
import NotFound from "@/app/components/NotFound";
import MovieCard from "@/app/components/MovieCard";
import { addToFavorite, checkIsFavorite, removeFromFavorite } from "@/app/utils/useFavorite";

const TITLE_TYPES_MAP = {
  movie: "Movies",
  tvSeries: "TV Series",
  podcastEpisode: "Podcast Episodes",
  tvEpisode: "TV Episodes",
  tvMovie: "TV Movies",
  videoGame: "Video Games",
};

export default function RenderMediaSection({ titleType }) {
  const [year, setYear] = useState(new Date().getFullYear());
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMovie = async () => {
    setLoading(true);

    try {
      const { results } = await api.get(
        `/titles?titleType=${titleType}&year=${year}&limit=4`
      );

      if (!results) {
        throw new Error("Failed to fetch data");
      }

      setMovies(results);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  // Add to favorite
  const handleAddToFavorite = (movieDetails) => {
    addToFavorite(movieDetails);
  };

  // Remove from favorite
  const handleRemoveFromFavorite = (movieDetails) => {
    removeFromFavorite(movieDetails);
  };

  useEffect(() => {
    fetchMovie();
  }, [year]);

  return (
    <section>
      <div className="flex items-center justify-between gap-3 mb-10">
        <SectionTitle title={TITLE_TYPES_MAP[titleType]} />
        <YearsSelect onChange={setYear} />
      </div>

      {/* Not Found */}
      {!loading && !movies.length && <NotFound />}

      {/* Loading */}
      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {Array.from({ length: 4 }).map((_, index) => (
            <MovieLoader key={index} />
          ))}
        </div>
      )}

      {/* List */}
      {movies.length > 0 && !loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {movies.map((item, index) => (
            <div key={index}>
              <MovieCard
                id={item.id}
                image={item?.primaryImage?.url}
                title={item?.titleText?.text}
                onAddToFavorite={() => handleAddToFavorite(item)}
                onRemoveFromFavorite={() => handleRemoveFromFavorite(item)}
                isFavorite={checkIsFavorite(item)}
              />
            </div>
          ))}
        </div>
      )}

      {/* Show more */}
      {movies.length > 0 && (
        <div className="flex justify-center mt-10">
          <Button variant="contained" disabled={loading}>
            Show more
          </Button>
        </div>
      )}
    </section>
  );
}
