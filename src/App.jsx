import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import RobotList from './components/RobotList';
import PartList from './components/PartList';

function App() {
  const [robots, setRobots] = useState([]);
  const [selectedRobot, setSelectedRobot] = useState(null);

  useEffect(() => {
    fetch('https://robot-cpe-2024.cleverapps.io/robots')
      .then(response => response.json())
      .then(data => setRobots(data));
  }, []);

  return (
    <div className="App container py-4">
      <h1 className="text-center mb-4">Magasin de robots</h1>
      <div className="global">
        <div className="col-md-8">
          <RobotList robots={robots} setSelectedRobot={setSelectedRobot} />
        </div>
        <div className="col-md-4">
          <PartList selectedRobot={selectedRobot} />
        </div>
      </div>
    </div>
  );
}
export default App;
