import Generator from './components/generator';
import './App.css';

function App() {

  return (
    <>
      <div id='main'>
        <div></div>
        {/* <Generator /> - Histórico de cores geradas*/}
        <Generator />
      </div>
    </>
  );
}

export default App;