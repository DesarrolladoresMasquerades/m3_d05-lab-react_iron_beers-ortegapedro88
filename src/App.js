import './App.css';
import {Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ListBeers from "./pages/ListBeers"
import AddBeer from "./pages/AddBeer"
import SingleBeer from "./pages/SingleBeer"
import RandomBeer from './pages/RandomBeer';



function App() {


  return (
    <div className="App"> 
   
    <Routes>
    <Route exact path='/beer/:beerId' element={<SingleBeer />}/>
    <Route exact path='/beers' element={<ListBeers />}/>
    <Route exact path='/new-beer' element={<AddBeer />}/>
    <Route exact path='/random-beer' element={<RandomBeer />}/>
    <Route exact path='/' element={<HomePage />}/>
    </Routes>
    </div>
  );
}

export default App;
