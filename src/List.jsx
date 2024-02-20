import React from 'react'
import {Item} from './Item'



export const List = (props) => {
  return (
    <div><ul>
    {props.list.map((item) => (
      <Item key={item.objectID} item={item} />
    ))}
  </ul></div>
  )
}



