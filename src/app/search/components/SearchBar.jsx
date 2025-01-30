"use client";

import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import { IconSearch } from "@tabler/icons-react";
import { FormControl } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function SearchBar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [displaySearchValue, setDisplaySearchValue] = useState("");

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  // When the page is loaded
  useEffect(() => {
    setDisplaySearchValue(searchParams.get("keyword") || "");
  }, []);

  return (
    <div className="w-full">
      <FormControl variant="outlined" sx={{ width: "100%" }}>
        <OutlinedInput
          sx={{
            width: "100%",
            height: "40px",
            borderRadius: "9999px",
            border: "1px solid #fff",
            color: "#fff",
            padding: "25px 10px",
          }}
          type={"text"}
          value={displaySearchValue}
          onChange={(e) => {
            setDisplaySearchValue(e.target.value);
            router.push(
              pathname + "?" + createQueryString("keyword", e.target.value)
            );
          }}
          startAdornment={
            <InputAdornment position="end">
              <IconButton edge="start">
                <IconSearch color="white" />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </div>
  );
}
