"use client";

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useCallback, useEffect, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function FilterType() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [selectedType, setSelectedType] = useState("");

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      },
    },
  };

  const [titleTypes] = useState([
    { label: "All", value: "all" },
    { label: "Movie", value: "movie" },
    { label: "Music Video", value: "musicVideo" },
    { label: "Podcast Episode", value: "podcastEpisode" },
    { label: "Podcast Series", value: "podcastSeries" },
    { label: "Short", value: "short" },
    { label: "TV Episode", value: "tvEpisode" },
    { label: "TV Mini Series", value: "tvMiniSeries" },
    { label: "TV Movie", value: "tvMovie" },
    { label: "TV Pilot", value: "tvPilot" },
    { label: "TV Series", value: "tvSeries" },
    { label: "TV Short", value: "tvShort" },
    { label: "TV Special", value: "tvSpecial" },
    { label: "Video", value: "video" },
    { label: "Video Game", value: "videoGame" },
  ]);

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    const selected = titleTypes.find(
      (titleType) => titleType.value === searchParams.get("titleType")
    );

    if (selected) {
      setSelectedType(selected.value);
    }else{
      setSelectedType("all");
    }
  }, [searchParams]);

  const handleChange = (e) => {
    router.push(
      pathname + "?" + createQueryString("titleType", e.target.value)
    );
  };

  return (
    <div>
      <Select
        sx={{ minWidth: 200, padding: "25px 10px" }}
        value={selectedType}
        onChange={handleChange}
        displayEmpty
        MenuProps={MenuProps}
      >
        <MenuItem disabled>
          <em>Select Type</em>
        </MenuItem>
        {titleTypes.map((titleType) => (
          <MenuItem value={titleType.value} key={titleType.value}>
            {titleType.label}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}
