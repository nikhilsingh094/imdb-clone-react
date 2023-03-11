import './App.css';
import Home from './pages/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { routePath } from './route/route';
import CategoryMovies from './pages/CategoryMovies';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ={routePath.home} element={<Home/>}></Route>
        <Route path ={routePath.categories} element={<CategoryMovies/>}></Route>
        <Route path ={routePath.invalid} element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
     
  
  );
}

export default App;
