import './App.css';
import Mensaje from './Mensaje.js'

const App = () => {
  

  const Descripcion = () =>{
    return <p>Esta es la App que estaremos usando en todo el Bootcamp de Youtube</p>
  }

  return (
    <div className="App">
      <Mensaje color='red' message='Estamos trabajando' />
      <Mensaje color='green' message='en el curso de '/>
      <Mensaje color='yellow' message='Fullstack con React '/>
      <Descripcion />   
    </div>
  );
}

export default App;
