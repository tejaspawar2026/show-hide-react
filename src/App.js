import './App.css';
import Content from './components/Content';
import { useState } from 'react';

function App() {

  const [status, setStatus] = useState(false);

  return (
    <div>
      <div>
        {
          status ? <Content text={"Hello World!"} />:null
        }
      </div>
      <div className='buttons'>
          {/* <button onClick={()=>setStatus(true)}>Show</button>
          <button onClick={()=>setStatus(false)}>Hide</button> */}
          <button onClick={()=>setStatus(!status)}>Toggle</button>
      </div>

    </div>
  );
}

export default App;
