import React from 'react'

import Listbullet from './Listbullet'

export const List = ({item, handle}) => {

  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walk',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abram, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  const user = {
    firstName: 'Robin',
    pet: {
      name: 'Trixi',
    },
  };

  const {firstName,pet:name} = user;





  let list = stories.map((item) => {
    return (
      <ul>
      
       
        <Listbullet key={item.objectID} onList={item} />
      </ul>
    )


  });

  const [text, setText] = React.useState('');




  const handleTxt = (event) => {


    setText(event.target.value);
    console.log(event.target.value);
    handle(text);



  };



  return (
    <div>
      {list}
      {firstName}
     
      <form>
        <label htmlFor="info">This is a form</label>
        <input name="title" type="text" id="info" onChange={handleTxt} />
        <input type="submit" value="Add" />

      </form>


    </div>
  )
}


export default List;