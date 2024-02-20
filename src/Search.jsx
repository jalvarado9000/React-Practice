

  import React from 'react'
  
  {/*
  export const Search = () => {
    return (
      <div>Search</div>
    )
  }
  */}

  export const Search = (props) => (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={props.onSearch} />
    </div>
  );
  