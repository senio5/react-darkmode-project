import React from 'react';
import Box from './components/Box';
import boxes from './boxes';

export default function App(props) {
  //we can use css in react and call that object style in our JSX style variable in the <div>
  //also we can use a ternary to toggle between different modes for example like darkmode
  //if props.darkMode is true white if false black

  //the props.darkMode comes from index.js
  const styles = {
    backgroundColor: props.darkMode ? "#222222" : "#cccccc"
  }
  //using state to give the list of objects in boxes.js a state
  const[squares, setSquares] = React.useState(boxes)
  //
  function toggle(id){
    setSquares(prevSquares =>{
      return prevSquares.map((square) => {
        return square.id === id ? {...square, on : !square.on} : square
      })
    })
  }
  //have to map over the data from boxes.js by using the above state 
  //this will display the elements on to the screen when we called the variable in the retrun statement
  //when mapping over the data in boxes.js or any data must have a key'

  //the squares.map comes the state here in App.js
  const squareElements = squares.map(square => (
    //the toggle function is called in the Box element so it be used as a prop in the Box component
    <Box 
    key={square.id}
    id={square.id}
    on={square.on}
    //we add a function to the toggle JSX to call the toggle function with square.id as its "PARAMETER"
    toggle={() => toggle(square.id)} />
  ))
  return(
    <main>
      {squareElements}
    </main>
  )
}

