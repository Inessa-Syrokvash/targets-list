import { useState } from 'react';
import './App.css';
import { data } from './data';


function App() {
  const [objectives, setObjectives] = useState(data);

  const removeTarget = (id) => {
    let newTargets = objectives.filter(target => target.id !== id);
    setObjectives(newTargets);
  }

return(
  <div>

    <div className='container'>
    <h1>My {objectives.length} {objectives.length === 1 ? 'target' : 'targets'}:</h1>
    </div>

    {objectives.map((element => {
      const {id, target, description, image, term } = element;

      return(
        <div key={id} className='container'>
          <div>
            <h2>{id} - {target}</h2>
            <p>{image}</p>
            <p>{description}</p>
            <hr />
            <p><span>Term: </span>{term}</p>
          </div>

          <div className='containerBtn'>
            <button onClick={() => removeTarget(id)}>Remove</button>
          </div>
        </div>
      )
    }))}
  
  <div className='containerDelete'>
    <button onClick={() => setObjectives([])}>Delete All</button>
  </div>
    
  </div>
)
}

export default App;
