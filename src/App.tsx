import React, { FC } from 'react';
import './App.css';
import { Person, HairColor } from "./components/Person";

const App: FC = () => {
  return (
    <div className="App">
       <Person name="Pedro" age={20} email="pedro@gmail.com" hairColor={HairColor.Pink}/>
    </div>
  );
}

export default App;
