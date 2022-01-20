import React, { FC, createContext } from 'react';
import './App.css';
import { Person, HairColor } from "./components/Person";

interface AppContextInterface{
    name: string;
    age: number;
    country: string
}

const AppContext = createContext<AppContextInterface | null>(null);

const App: FC = () => {

  const contectValue: AppContextInterface = {
    name: "Pedro",
    age: 20,
    country: "Brazil"
  }
  return (
    <AppContext.Provider value={contectValue} >
    <div className="App">
       <Person name="Pedro" age={20} email="pedro@gmail.com" hairColor={HairColor.Pink}/>
    </div>
    </AppContext.Provider>
  );
}

export default App;
