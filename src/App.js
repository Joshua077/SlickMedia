import './App.css';
import Hero from './Components/Hero/Hero';
import MovieLists from './Components/MovieLists/MovieLists';
import Nav from './Components/Nav/Nav';

function App() {
  return (
    <div className="App">
   <Nav/>
   <Hero/>
   <MovieLists/>
    </div>
  );
}

export default App;
