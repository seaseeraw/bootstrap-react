import logo from './logo.svg';
import './App.css';
import AlertDismissible from './components/navbar.js';
import BasicExample from './components/content.js';


function App() {
  return (
    <div className="App">
      <BasicExample/>
    <AlertDismissible/>
    </div>
  );
}

export default App;
