import Generator from './components/Generator/generator';
import ColorHistory from './components/ColorHistory/colorhistory';
import './App.css';

function App() {

  return <div id='main'>
    <ColorHistory />
    <Generator />
  </div>;
}

export default App;