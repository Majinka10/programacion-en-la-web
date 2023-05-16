import miGif from './dogo.gif'
import './App.css';
import MyComponente from './comp.jsx';

const componente = () =>{
  return(
      <div className="App">
          <header className="App-header">
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsQ098fgoR1AiYAOoNcgn2oS4Dhfz6eYM7pxgGkj8MhQ&s' alt="Perro bailando"></img>
          <p>Hola mundo, yo soy Jorge</p>
          <MyComponente rey = {{nombre:'Pedro',cantidad:4,urlImg:miGif}}/>
          </header>
      </div>
  );
};

export default componente;
