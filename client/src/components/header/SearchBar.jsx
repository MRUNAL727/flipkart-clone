import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';

import InputBase from '@mui/material/InputBase';

import SearchIcon from '@mui/icons-material/Search';


const Search = styled('div')(({ theme }) => ({
  // position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#fff',
  // marginLeft: 0,
  width: '38%',
  display: 'flex',
  color: 'black'
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  // padding: 5,
  height: '100%',
  // position: 'absolute',
  // pointerEvents: 'none',
  // display: 'flex',
  alignItems: 'center',
  // justifyContent: 'center',
  color: 'blue',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon,
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      // width: '20ch',
    },
  },
}));

export default function SearchBar(){
  return (
    // <Box sx={{ flexGrow: 1 }}>
      // <AppBar position="static">
        // <Toolbar>
          
          
          <Search>
            
            <StyledInputBase
              placeholder="Searc for brands, products and more"
              inputProps={{ 'aria-label': 'search' }}
            />
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
          </Search>
          
        // </Toolbar>
      // </AppBar>
    // </Box>
  );
}