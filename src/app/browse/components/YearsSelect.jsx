"use client";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function YearsSelect({onChange}) {
  const thisYear = new Date().getFullYear();
  const [year, setYear] = useState(thisYear);

  const handleChange = (event) => {
    setYear(event.target.value);
    onChange(event.target.value);
  };

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      },
    },
  };

  return (
    <div>
      <FormControl>
        <Select
          value={year}
          onChange={handleChange}
          displayEmpty
          MenuProps={MenuProps}
        >
          <MenuItem disabled>
            <em>Select Year</em>
          </MenuItem>
          {Array.from({ length: 10 }).map((_, index) => (
            <MenuItem value={thisYear - index} key={index}>
              {thisYear - index}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
