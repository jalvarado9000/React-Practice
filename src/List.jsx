import React from 'react'
import {Item} from './Item'


{/*
export const List = () => {
  return (
    <div>List</div>
  )
}

*/}

export const List = (props) => (
    <ul>
      {props.list.map((item) => (
        <Item key={item.objectID} item={item} />
      ))}
    </ul>
  );
  