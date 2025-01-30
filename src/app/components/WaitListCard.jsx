"use client";
import { IconButton } from "@mui/material";
import { IconCheck, IconPlaylistAdd } from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";

export default function WaitListCard({
  image,
  title,
  onAddToWaitList,
  onRemoveFromWaitList,
  inWaitList,
}) {
  const [isInWaitList, setIsInWaitList] = useState(inWaitList ?? false);

  const handleAddToWaitList = () => {
    onAddToWaitList();
    setIsInWaitList(true);
  };

  const handleRemoveFromWaitList = () => {
    onRemoveFromWaitList();
    setIsInWaitList(false);
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
        <p className=" font-semibold text-white mb-2 mt-1.5">{title}</p>
        <div className="">
          <IconButton
            className="shrink-0"
            aria-label="Add to Wait List"
            onClick={
              isInWaitList ? handleRemoveFromWaitList : handleAddToWaitList
            }
          >
            {isInWaitList ? (
              <IconCheck className="text-red-500" />
            ) : (
              <IconPlaylistAdd className="text-white" />
            )}
          </IconButton>
        </div>
      </div>
    </>
  );
}
