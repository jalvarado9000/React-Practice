import React from 'react'
{/*
export const Item = () => {
  return (
    <div>Item</div>
  )
}
*/}

export const Item = (props) => (
    <li>
      
      <span>{props.item.points}</span>
    </li>
  );