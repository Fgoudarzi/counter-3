import './App.css';
import { useReducer } from 'react'
function App() {
  const [count, dispatch] = useReducer(reducer, 0)
  function reducer(count, action) {
    switch (action.type) {
      case "increment":
        return count + 1;
      case "decrement":
        return count - 1;
      case "reset":
        return 0;
      default:
        return count;
    }
  }
  return (
    <div className="App">
      <div className='container'>
        <div>
          <h2>Counter</h2>
          <button onClick={() => dispatch({ type: 'increment' })}>INCREMENT</button>
          <span>{count}</span>
          <button onClick={() => dispatch({ type: 'decrement' })}>DECREMENT</button>
        </div>
        <div>
          <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
      </div>
    </div>)
}

export default App;
