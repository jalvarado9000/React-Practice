import React from 'react'

export const Listbullet = (props) => {




    return (
        <div>
            <li key={props.onList.key}>{props.onList.title} {props.onList.url} {props.onList.author}</li>

        </div>
    )
}

export default Listbullet;