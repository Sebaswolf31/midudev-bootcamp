
import './App.css';

import Mensaje from './Mensaje.js'

const Description =() => {

return <p>
  Esta es la app del curso react full stack bootcamp

</p>

}

  const App = () => {
  return (
    
      <div className="App">
      <Mensaje color='red' message = 'Estamos Trabajando'/>
      <Mensaje color='green' message = 'En un curso'/>
      <Mensaje color='red' message = 'De React' />
      <Description/>
      </div>
  )
}

export default App;
