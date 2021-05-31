import React, {useEffect} from 'react';
import axios from 'axios'

const Lista = () => {

  useEffect(() => {
    buscar()
  }, [])

  const buscar = async () => {
    const res = await axios.get('http://localhost:8080/')
    const {data} = res;
    console.log(data.data);
  }

  return (<div>

  </div>)
}

function App() {
  return (
    <div className="App">
      <Lista/>
    </div>
  );
}

export default App;
