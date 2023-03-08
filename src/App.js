import Header from './components/Header';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Userlist from './components/Userlist';
import Counter from './components/Counter';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path ="/" element = {<div className= 'container'><Header /></div>}/>
        <Route  path ="counter" element ={<Counter />}/>
        <Route  path ="userlist" element ={<Userlist />}/>
        <Route  path ="*" element ={<h1>Not Found </h1>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
