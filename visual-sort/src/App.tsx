import './App.css';
import BubbleSort from './components/BubbleSort';
import InsertionSort from './components/InsertionSort';
import SelectionSort from './components/SelectionSort';

function App() {
  return (
    <main>
      <h1>Sorting Algorithms Visualized</h1>
      <BubbleSort />
      <SelectionSort />
      <InsertionSort />
    </main>
  );
}

export default App;
