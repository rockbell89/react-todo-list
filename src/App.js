import { createGlobalStyle } from 'styled-components';
import './App.css';
import Todos from './components/Todos';

const AppContainer = createGlobalStyle`
  * {
    box-sizing:border-box;
    line-height:1;
  }
  body {
    display:flex;
    justify-content:center;
    align-items:center;
    min-height:100vh;
    background-color:#f0f0f0;
    padding:1em;
    overflow-y:auto;
  }
`;

function App() {
  return (
    <>
      <AppContainer />
      <Todos></Todos>
    </>
  );
}

export default App;
