import './App.css';
import { TodoList } from './components/Todo/TodoList';

const App = () => {

  
  
  // const apple = () => {
    //   const num1 = 6;
    //   const num2 = 7;
    //   return num1 + num2
    // }
    // const result = apple();
//     const pineapple = (num) => {
//       var a = 1 ;
//       return num +1;
//     }
    
// // const orange = (num3, num4) => {
// //   return undefined
// // }
// // const result = orange(6,7)
//  const dodo = 3;
//  console.log(dodo)

//  const aaa = [ 1, 2, 3];
//  aaa.push(7);
//  console.log(aaa)


  return (
    <div className="App">
      <header>
        <h1>To Do List</h1>
        <form>

        </form>
      </header>
      <TodoList />
    </div>
  );
}

export {App};

