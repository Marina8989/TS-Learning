import React, { FC } from 'react';
import './App.css';
import { Person } from "./components/Person";

const App: FC = () => {
  return (
    <div className="App">
       <Person name="Pedro" age={20} email="pedro@gmail.com" />
    </div>
  );
}

export default App;
