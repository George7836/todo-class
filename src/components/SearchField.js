import React from 'react'
import { InputBase, alpha, styled } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { TodoContext } from '../context/TodoContexxt';

class SearchField extends React.Component {
  debounce;

  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }
  
  showResults(e) {
    const setSearchValue = this.context.setSearchValue
    this.setState({text: e.target.value})
    setSearchValue(e.target.value)
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.text !== this.state.text) {
      this.debounce = setTimeout(() => {
        const filterTodos = this.context.filterTodos 
        filterTodos(this.context.todos)
      }, 500)
    }
  }

  componentWillUnmount() {
    clearTimeout(this.debounce)
  }

  render() {
    return (
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          value={this.state.text}
          onChange={(e) => this.showResults(e)}
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
    )
  }
}

SearchField.contextType = TodoContext

export default SearchField

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
