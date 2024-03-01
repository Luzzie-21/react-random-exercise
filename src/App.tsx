import React, { useState, useEffect } from 'react';
import './App.css';
import { Container } from './components/styles/Container.styled'
import GlobalStyles from './components/styles/Global';
import Button from './components/Button';
import { ButtonStyled } from './components/styles/Button.styled';
import Card from './components/Card';
import DeleteButton from './components/DeleteButton';

export type Exercise = {
  id: String,
  title: String,
  url: String
}

const App: React.FC = () => {

  const [data, setData] = useState<any[]>([]);
  const [exercise, setExercise] = useState<Exercise>({ id: "", title: "", url: "" });
  const [name, setName] = useState<string>('');
  const [url, setUrl] = useState<string>('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/data.json');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const addData = async () => {
    const lastId = data.length > 0 ? parseInt(data[data.length - 1].id) : 0;
    const newId = (lastId + 1).toString();

    const newData = {
      id: newId,
      title: `${name}`,
      url: `${url}`,
    };

    try {
      await fetch('http://localhost:3001/data', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([...data, newData]),
      });
  
      fetchData();
    } catch (error) {
      console.error('Error adding data:', error);
    }
  };

  const deleteData = async (id: string) => {
    const newData = data.filter((item) => item.id !== id);

    try {
      await fetch('http://localhost:3001/data', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData),
      });
  
      fetchData();
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  function pickRandomExercise(): Exercise {
    function getRandom (list: Array<any>) {
      return list[Math.floor((Math.random()*list.length))];
    }
    return getRandom(data)
    }

  return (
    <>
      <GlobalStyles />
    <Container>
      <form>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name'/>
        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder='Url'/>
          <Button onPress={() => addData()} title="Add new Item"></Button>
      {/* <button type="button" onClick={() => addData()}>Submit</button> */}
        </form>
        {/* <button onClick={() => setExercise(pickRandomExercise)}>Get random exercise!</button> */}
        <Button onPress={() => setExercise(pickRandomExercise)} title="Get random exercise!" />
        <div>
       <p>{exercise.title}</p>
        </div>
        <ul>
        {data.map((item) => (
          <li key={item.id}>
            <Card title={item.title} url={item.url} onPress={() => deleteData(item.id)}/>
            {/* <DeleteButton onPress={() => deleteData(item.id)} /> */}
            {/* <button onClick={() => deleteData(item.id)}>Delete</button> */}
          </li>
        ))}
      </ul>
      </Container>
      </>
  );
};

export default App;
