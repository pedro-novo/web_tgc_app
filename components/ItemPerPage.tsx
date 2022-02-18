import React from "react";
import { useDisplayOptionsContext } from "./context/DisplayOptions";
import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import ListIcon from "@mui/icons-material/List";

const ItemPerPage = () => {
  const { numberOfItems, numberOfItemsSet, displayGrid, displayGridSet } =
    useDisplayOptionsContext();

  const handleChange = (event: SelectChangeEvent) => {
    numberOfItemsSet(event.target.value);
  };

  return (
    <Box display='flex' justifyContent='flex-end' alignItems='center'>
      <Box>
        <ButtonGroup variant='contained'>
          <Button
            component='span'
            onClick={() => {
              displayGridSet(true);
            }}
            sx={
              displayGrid
                ? { background: "primary", color: "#fff" }
                : { background: "none" }
            }
          >
            <GridViewIcon fontSize='large' />
          </Button>
          <Button
            component='span'
            onClick={() => {
              displayGridSet(false);
            }}
            sx={
              !displayGrid
                ? { background: "primary", color: "#fff" }
                : { background: "none" }
            }
          >
            <ListIcon fontSize='large' />
          </Button>
        </ButtonGroup>
      </Box>
      <Box>
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <InputLabel id='demo-simple-select-autowidth-label'>Items</InputLabel>
          <Select
            labelId='demo-simple-select-autowidth-label'
            id='demo-simple-select-autowidth'
            value={numberOfItems}
            onChange={handleChange}
            autoWidth
            label='Items Per Page'
          >
            <MenuItem value={12}>12</MenuItem>
            <MenuItem value={24}>24</MenuItem>
            <MenuItem value={36}>36</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default ItemPerPage;
