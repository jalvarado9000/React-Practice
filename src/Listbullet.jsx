import React from 'react'

export const Listbullet = ({onList}) => {




    return (
        <div>
            <li key={onList.key}>{onList.title} {onList.url} {onList.author}</li>

        </div>
    )
}

export default Listbullet;