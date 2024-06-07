import logo from './logo.svg';
import './App.css';
import AddLens from './components/AddLens';
import DeleteLen from './components/DeleteLen';
import SearchLens from './components/SearchLens';
import ViewLen from './components/ViewLen';

function App() {
  return (
    <div>
      <AddLens/>
      <DeleteLen/>
      <SearchLens/>
      <ViewLen/>
    </div>
  );
}

export default App;
