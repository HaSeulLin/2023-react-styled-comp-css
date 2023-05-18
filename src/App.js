import './App.css';
import CounterComp from './features/counter/CounterComp';
import InputForm from './features/inputform/InputForm';
import StyleComp from './features/styleComp/StyleComp';

function App() {
  return (
    <div className="App">
      <CounterComp />
      <InputForm />
      <StyleComp>스타일 컴포넌트</StyleComp>
    </div>
  );
}

export default App;
