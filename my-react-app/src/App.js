import logo from './logo.svg';
import './App.css';
import Button from './Buttons.js';

function App() {
  const handleClick = () => {
    console.log('Butona tıklandı!');
  };

  return (
    <div>
      <Button onClick={handleClick} />
    </div>
  );
}

export default App;
