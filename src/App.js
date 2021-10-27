import Cabecera from "./components/Cabecera";
import TodoList from './components/TodoList';

function App(){
  return (
    <div className="App">
      <Cabecera titulo="La mejor todolist del siglo"></Cabecera>
      <main className="container w-50">
        <TodoList></TodoList>
      </main>
      
    </div>
  );
}

export default App;
