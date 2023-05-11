// import logo from './logo.svg';
// import miGif from './dogo.gif'
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         <img src={miGif} alt="Perro bailando"></img>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Hola Mundo yo soy Jorge
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, {useState} from 'react';

function App() {
  const [inpuTValue, setInputValue]=useState('');

  const nombre = (event) =>{
    setInputValue(event.target.value)
  };

  const boton = () =>{
    alert(`Hola, mi nombre es ${inpuTValue}!`)
  }

  return (
    <div className="App">
      <header className="App-header">
        <input type="text" placeholder="Ingresa tu nombre"
        value={inpuTValue} onChange={nombre} requested/>
        <button onClick={boton}>Lanzar</button>
      </header>
    </div>
  );
}

export default App;

// const componente = () =>{
//   return(
//       <div className="App">
//           <header className="App-header">
//           <img src={miGif} alt="Perro bailando"></img>
//           <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//           >
//           Hola Mundo yo soy Jorge
//           </a>
//           </header>
//       </div>
//   );
// };

// export default componente;
