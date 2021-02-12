import { Switch, Route } from 'wouter';

//Components
import Home from './pages/Home';
import GifDetail from './pages/GifDetail';
import SearchResults from './pages/SearchResults';

//Context
import { GifContextProvider } from './context/GifContextProvider';

//CSS
import './App.css';


function App() {

  return (

    <div className="App container mx-auto" >
      <Switch>
        <GifContextProvider>
          <Route path="/" component={Home} />
          <Route path="/search/:keyword" component={SearchResults} />
          <Route path="/gif/:id" component={GifDetail} />
        </GifContextProvider>
      </Switch>
    </div>

  );
}

export default App;
