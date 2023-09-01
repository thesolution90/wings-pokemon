import './App.css';
import LanguageDropdown from './components/LanguageDropdown';
import GridContainer from './components/GridContainer';
import TypeDropdown from './components/TypeDropdown';
import NumberSearch from './components/NumberSearch';
import { SessionProvider } from './components/SessionContext';

function App() {
  return (
    <SessionProvider>
      <div className="App">
        <div className="top">
          <NumberSearch />
          <TypeDropdown />
          <LanguageDropdown />
        </div>
        <hr />

        <div className='grid'>
          <GridContainer />
        </div>
      </div>
    </SessionProvider>
  );
}

export default App;
