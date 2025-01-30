"use client";

import {
  addToWaitList,
  checkIsInWaitList,
  removeFromWaitList,
} from "@/app/utils/useWaitList";
import { IconButton } from "@mui/material";
import { IconCheck, IconPlaylistAdd } from "@tabler/icons-react";
import { useEffect, useState } from "react";

export default function WaitListButton({ mediaDetails }) {
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    setIsAdded(checkIsInWaitList(mediaDetails));
  }, [mediaDetails]);

  const handleAddToWaitList = (mediaDetails) => {
    addToWaitList(mediaDetails);
    setIsAdded(true);
  };

  const handleRemoveFromWaitList = (mediaDetails) => {
    removeFromWaitList(mediaDetails);
    setIsAdded(false);
  };

  return (
    <div className="shrink-0">
      {isAdded ? (
        <IconButton color="inherit" onClick={() => handleRemoveFromWaitList(mediaDetails)}>
          <IconCheck size={24} />
        </IconButton>
      ) : (
        <IconButton
          color="inherit"
          onClick={() => handleAddToWaitList(mediaDetails)}
        >
          <IconPlaylistAdd size={24} />
        </IconButton>
      )}
    </div>
  );
}
