"use client";
import { IconButton } from "@mui/material";
import { IconHeart, IconHeartFilled } from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";

export default function MovieCard({
  image,
  title,
  onAddToFavorite,
  onRemoveFromFavorite,
  isFavorite,
}) {
  const [isShowFavorite, setShowFavorite] = useState(isFavorite ?? false);

  const handleAddToFavorite = () => {
    onAddToFavorite();
    setShowFavorite(true);
  };

  const handleRemoveFromFavorite = () => {
    onRemoveFromFavorite();
    setShowFavorite(false);
  };

  return (
    <>
      <div className="h-52 mb-3 overflow-hidden rounded-xl relative">
        <Image
          src={image ? image : "/empty_img.jpg"}
          width={800}
          height={1200}
          className="object-cover object-top w-full h-full poster-shadow"
          priority
          alt=""
        />
      </div>
      <div className="flex justify-between">
        <p className=" font-semibold text-white mb-2 mt-1">{title}</p>
        <div className="shrink-0">
          <IconButton
            aria-label="Add to favorites"
            onClick={
              isShowFavorite ? handleRemoveFromFavorite : handleAddToFavorite
            }
          >
            {isShowFavorite ? (
              <IconHeartFilled className="text-red-500" />
            ) : (
              <IconHeart className="text-white" />
            )}
          </IconButton>
        </div>
      </div>
    </>
  );
}
