import { useState } from 'react';
import './App.css';
import EditPage from './Components/Edit/EditPage';
import Header from './Components/Header/Header';


function App() {

  const [isEdit, setEdit] = useState(false)

  return (
    <header className="App">
      {isEdit ? <EditPage setEdit={setEdit}  /> : <Header setEdit={setEdit} />}
    </header>
  );
}

export default App;
