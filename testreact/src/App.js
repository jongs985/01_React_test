import BasicExample from './components/layouts/navbar.js';
import UncontrolledExample from './components/layouts/carousels.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <>
        <UncontrolledExample/>
        <BasicExample/>
      </>
    </div>
  );
}

export default App;
