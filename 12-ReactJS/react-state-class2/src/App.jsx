import './App.css';
import Lottry from './Lottry';
import LudoBoard from './LudoBoard';
import Ticket from './Ticket';
import TodoList from './TodoList';

function App() {
  return (
    <>
      <Lottry n={3} winningSum={20}/>
    </>
  )
}

export default App
