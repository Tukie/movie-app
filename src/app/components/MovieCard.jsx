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
        <div className="absolute top-0 left-0 w-full h-full bg-black/50  opacity-0 hover:opacity-100 transition-all duration-300 flex justify-end">
          <div className="">
            <IconButton
              aria-label="Add to favorites"
              onClick={isShowFavorite ? handleRemoveFromFavorite : handleAddToFavorite}
            >
              {isShowFavorite ? (
                <IconHeartFilled className="text-red-500" />
              ) : (
                <IconHeart className="text-white" />
              )}
            </IconButton>
          </div>
        </div>

        <Image
          src={image ? image : "/empty_img.jpg"}
          width={800}
          height={1200}
          className="object-cover object-top w-full h-full poster-shadow"
          priority
          alt=""
        />
      </div>
      <div>
        <p className=" font-semibold text-white mb-2">{title}</p>
      </div>
    </>
  );
}
