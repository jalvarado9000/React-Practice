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
      <span>
        <a href={props.item.url}>{props.item.title}</a>
      </span>
      <span>{props.item.author}</span>
      <span>{props.item.num_comments}</span>
      <span>{props.item.points}</span>
    </li>
  );