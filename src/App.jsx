import * as React from 'react';
import List from './List'

export const App = () => {

  const [display, setDisplay] = React.useState('');

const handleWord = (text) =>{
  setDisplay(text)
}
  

  return (
    <div>
      <List handle={handleWord}/>
      <p>{display}</p>

    </div>
  )
}






export default App;