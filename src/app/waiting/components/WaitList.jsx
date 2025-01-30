"use client";
import { useEffect, useState } from "react";
import NotFound from "@/app/components/NotFound";
import MovieLoader from "@/app/components/MovieLoader";
import {
  addToWaitList,
  checkIsInWaitList,
  removeFromWaitList,
  getAllWaitList,
} from "@/app/utils/useWaitList";
import WaitListCard from "@/app/components/WaitListCard";

export default function WaitList() {
  const [waitLists, setWaitLists] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchWaitLists = async () => {
    setLoading(true);
    setTimeout(() => {
      setWaitLists(getAllWaitList);
      setLoading(false);
    }, 1500);
  };

  useEffect(() => {
    fetchWaitLists();
  }, []);

  // Add to favorite
  const handleAddToWaitList = (movieDetails) => {
    addToWaitList(movieDetails);
  };

  // Remove from favorite
  const handleRemoveFromWaitList = (movieDetails) => {
    removeFromWaitList(movieDetails);
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
          waitLists.length > 0 &&
          waitLists.map((movie) => (
            <div key={movie.id}>
              <WaitListCard
                image={movie?.primaryImage?.url}
                onAddToWaitList={() => handleAddToWaitList(movie)}
                onRemoveFromWaitList={() => handleRemoveFromWaitList(movie)}
                inWaitList={checkIsInWaitList(movie)}
                title={movie.titleText.text}
              />
            </div>
          ))}
      </div>

      {!loading && !waitLists.length && (
        <div className="w-full mx-auto">
          <NotFound />
        </div>
      )}
    </div>
  );
}
