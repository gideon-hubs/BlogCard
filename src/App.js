import React from 'react';
import './App.css';
import './style.css'
import Container  from './Container';



// function App() {

//   let name = 'mario'


//   const handleClick = () => {
//     name = 'luigi';
//     console.log(name)
//   }


//   return(
//     <div className='App'>
//     <h1>My name is {name}</h1>
//     <button onClick={handleClick}>Change name</button>
//     </div>
//   );
// }
// export default App;


class App extends React.Component {
  render(){
    return (
     <Container name = "psidigitals"/>
    )
  }

}
export default App;
