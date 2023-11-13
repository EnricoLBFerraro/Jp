import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App(){
  const [data, setData] = useState([]);

  const getUsers = async() => {

    try{

      const response = await axios.get('http://localhost:3003/dadosUsers')
      const dataFromApi = response.data;
      setData(dataFromApi);
      console.log(dataFromApi)
    }catch(error){
      alert(error)
    }

  };

  useEffect(() =>{
    getUsers()
  }, [])
  return (
    <div className="App">
      <h2>Lista de Objetos JSON</h2>
      {data.length === 0 ? <p>Carregando...</p> : (
        data.map((users) => (
          <div className='users' key={users.Id}>
            <p>{users.Nome}</p>
            <p>{users.Email}</p>
            <p>{users.Drt}</p>
            <p>{users.Cargo}</p>
            <p>{users.Senha}</p>
            <p>{users.Status}</p>
            <p>------------------------------</p>
          </div> 
        ))
      )}
    </div>
  );
}

export default App;
