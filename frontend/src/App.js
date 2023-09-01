import './App.css';
import LanguageDropdown from './components/LanguageDropdown';
import GridContainer from './components/GridContainer';
import { SessionProvider } from './components/SessionContext';

function App() {
  return (
    <SessionProvider>
      <div className="App">
        <div className="top-right">
          <LanguageDropdown />
        </div>
        <div className='grid'>
          <GridContainer />
        </div>
      </div>
    </SessionProvider>
  );
}

export default App;
