import { Button } from "@mui/material"

export default function SearchButton({onClick}) {
  return (
    <div>
        <Button variant="contained" size="large" sx={{padding: "10px 20px"}} onClick={onClick}>Search</Button>
    </div>
  )
}
