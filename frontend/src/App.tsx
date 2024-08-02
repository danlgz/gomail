import {useState} from 'react';
import {Greet} from "../wailsjs/go/main/App";
import Screen from './components/layout/screen';

function App() {
  const [mainColor, setMainColor] = useState("#064e3b");
  const [resultText, setResultText] = useState("Please enter your name below 👇");
  const [name, setName] = useState('');
  const updateName = (e: any) => setName(e.target.value);
  const updateResultText = (result: string) => setResultText(result);
  console.log(mainColor);

  function greet() {
      Greet(name).then(updateResultText);
  }

  return (
      <main className="w-full h-screen">
          <Screen color={mainColor} />
      </main>
  )
}

export default App
