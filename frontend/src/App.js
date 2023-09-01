import './App.css';
import LanguageDropdown from './components/LanguageDropdown';
import GridContainer from './components/GridContainer';
import TypeDropdown from './components/TypeDropdown';
import { SessionProvider } from './components/SessionContext';

function App() {
  return (
    <SessionProvider>
      <div className="App">
        <div className="top">
          <div className="top-center">
            <TypeDropdown />
          </div>
          <div className="top-right">
            <LanguageDropdown />
          </div>
        </div>

        <div className='grid'>
          <GridContainer />
        </div>
      </div>
    </SessionProvider>
  );
}

export default App;
