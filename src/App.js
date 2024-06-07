import logo from './logo.svg';
import './App.css';
import AddLens from './components/AddLens';
import DeleteLen from './components/DeleteLen';
import SearchLens from './components/SearchLens';
import ViewLen from './components/ViewLen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
  
    <BrowserRouter>
    
    <Routes>

      <Route path='/' element={<AddLens/>}/>
      <Route path='/SearchLens' element={<SearchLens/>}/>
      <Route path='/DeleteLen' element={<DeleteLen/>}/>
      <Route path='/ViewLen' element={<ViewLen/>}/>
    </Routes>
    
    
    </BrowserRouter>
  );
}

export default App;
