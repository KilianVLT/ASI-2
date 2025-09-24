import { useState } from 'react'
import { Button } from "react-bootstrap";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(props) {
  const [title, setTitle] = useState(props.title);
  const [count, setCount] = useState(0);

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div className="App">
      <h1 onMouseOver={() => setCount(count + 1)}> this is my first React Component</h1>
      <label htmlFor="titleInput">Title</label>
      <input
        type="text"
        id="titleInput"
        onChange={handleChangeTitle}
        value={title}
      />
      <h3>{title}</h3>
      <h3>Vous avez survolé le titre {count} fois</h3>
    </div>
  );
}
export default App;
