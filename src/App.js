import './App.scss';
import Header from './components/Header/Header';
import ToDoList from './components/ToDoList/ToDoList';

function App() { 
  return (
    <div className="App">
      <Header/>
      <ToDoList/>
    </div>
  );
}

export default App;
